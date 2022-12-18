import authApi from 'api/auth';
import userApi from 'api/user';
import { push } from 'connected-react-router';
import { call, put, takeLatest } from 'redux-saga/effects';
import { routes } from 'utils/constants';
import { StorageConstants, UserRoles } from 'utils/enum';
import { setHeadersAuthorization } from 'utils/help';
import { authActions } from './authSlice';

function* handleLogin(action) {
  try {
    const response = yield call(authApi.login, action.payload);
    const data = response.data.data;
    console.log(`[Auth<Saga>][handleLogin] dataResponse-> ${JSON.stringify(data, null, 2)}`);

    // if (data.user.role === UserRoles.ADMIN || data.user.role === UserRoles.PROVIDER) {
    //   localStorage.setItem(StorageConstants.ACCESS_TOKEN, data.token);
    //   localStorage.setItem(StorageConstants.UNITS, data.user.units);
    //   localStorage.setItem(StorageConstants.FACILITY_ID, data.user.facility._id);

    //   setHeadersAuthorization(`Bearer ${data.token}`);
    //   yield put(authActions.loginSuccess(data));
    //   // redirect to admin page
    //   yield put(push(routes.PATIENTS));
    // } else if (data.user.role === UserRoles.SUPER_ADMIN) {
    //   localStorage.setItem(StorageConstants.ACCESS_TOKEN, data.token);
    //   setHeadersAuthorization(`Bearer ${data.token}`);
    //   yield put(authActions.loginSuccess(data));
    //   // redirect to super admin page
    //   yield put(push(`${routes.SUPER_ADMIN}${routes.DASHBOARD}`));
    // } else {
    //   yield put(authActions.loginFailed('Permission denied.'));
    // }
  } catch (error) {
    yield put(authActions.loginFailed(error.response.data.message));
  }
}

function* handleResetPassword(action) {
  try {
    const response = yield call(authApi.resetPassword, action.payload);
    const data = response.data.data;
    yield put(authActions.resetPasswordSuccess(data));
  } catch (error) {
    yield put(authActions.resetPasswordFail(error.message));
  }
}

function* handleUpdateUnits(action) {
  try {
    const response = yield call(userApi.updateUnits, action.payload);
    const data = response.data.data;

    localStorage.setItem(StorageConstants.UNITS, action.payload.units);
    yield put(authActions.updateUnitsSuccess(data));
  } catch (error) {
    yield put(authActions.updateUnitsFail(error.message));
  }
}

function* handleGetUserByToken(action) {
  try {
    const res = yield call(authApi.getUserByToken, action.payload);
    if (res.status === 200) {
      yield put(authActions.getUserByTokenSuccess(res.data.data.user));
      localStorage.setItem(StorageConstants.UNITS, res.data.data.user.units);
    } else {
      yield put(authActions.getUserByTokenFail());
      yield put(authActions.logout());
    }
  } catch (error) {
    yield put(authActions.getUserByTokenFail());
    yield put(authActions.logout());
  }
}

function* handleLogout() {
  console.log('logout: ', StorageConstants.ACCESS_TOKEN);
  localStorage.removeItem(StorageConstants.ACCESS_TOKEN);
  setHeadersAuthorization('');
  // redirect to login page
  yield put(push(routes.AUTH_SIGNIN));
}

export default function* authSaga() {
  yield takeLatest(authActions.login.type, handleLogin);
  yield takeLatest(authActions.getUserByToken.type, handleGetUserByToken);
  yield takeLatest(authActions.logout.type, handleLogout);
  yield takeLatest(authActions.updateUnits.type, handleUpdateUnits);
  yield takeLatest(authActions.resetPassword.type, handleResetPassword);
}
