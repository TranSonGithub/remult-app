import authSaga from '../features/auth/authSaga';
import { all } from 'redux-saga/effects';
import menuSaga from '../features/menu/menuSaga';
import cartSaga from '../features/cart/cartSaga';

export default function* rootSaga() {
  yield all([authSaga(), menuSaga(), cartSaga()]);
}
