import { loadingActions } from './../loading/loading';
import { routerAdmin } from './../../utils/route';
import { push } from 'connected-react-router';
import authApi from '../../api/auth';
import { call, put, takeLatest } from 'redux-saga/effects';
import { authActions } from './authSlice';
import { history } from '../../utils/history';

function* handleLogin(action: any): any {
  try {
    const response = yield call(authApi.login, action.payload);
    const data = response.data.data;
    console.log(`[Saga][handleLogin] dataResponse-> ${JSON.stringify(data.token, null, 2)}`);
    localStorage.setItem('token', data.token);
    history.push(routerAdmin.menu);
    yield put(authActions.loginSuccess({ token: data.token }));
    yield put(loadingActions.changeLoading({ show: false }));
  } catch (error: any) {
    console.log(`[Saga][handleLogin] dataResponse-> ${JSON.stringify(error.response.data.message, null, 2)}`);
    yield put(authActions.loginFailed(error.response.data.message));
  }
}

export default function* authSaga() {
  yield takeLatest(authActions.login.type, handleLogin);
}
