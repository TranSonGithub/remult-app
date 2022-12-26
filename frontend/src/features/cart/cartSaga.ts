import { popupActions } from './../popup/popupSlice';
import { loadingActions } from './../loading/loading';
import { createOrder } from './../../../../server/services/order';
import { cartActions } from './cartSlice';
import { call, takeLatest, put } from 'redux-saga/effects';
import orderApi from '../../api/order';

function* handleCreateOrder(action: any): any {
  try {
    console.log(`[Saga][handleGetMenus]`);

    const response = yield call(orderApi.create, action.payload);
    const data = response.data;
    console.log(`[Saga][handleGetMenus] dataResponse-> ${JSON.stringify(data.message, null, 2)}`);

    yield put(loadingActions.changeLoading({ show: false }));
    yield put(popupActions.showPopup({ show: true, content: 'Thanh toán thành công!', numberButton: 1 }));
  } catch (error: any) {
    console.log(`[Saga][handleCreateMenu] dataResponse-> ${JSON.stringify(error.response.data.message, null, 2)}`);
    yield put(cartActions.chargeCartFail(error.response.data.message));
  }
}

function* handleGetOrders(action: any): any {
  try {
    console.log(`[Saga][handleGetMenus]`);

    const response = yield call(orderApi.get, action.payload);
    const data = response.data;
    console.log(`[Saga][handleGetMenus] dataResponse-> ${JSON.stringify(data.data, null, 2)}`);

    yield put(loadingActions.changeLoading({ show: false }));
    yield put(cartActions.getOrdersSuccess(data.data.orders));
  } catch (error: any) {
    console.log(`[Saga][handleCreateMenu] dataResponse-> ${JSON.stringify(error.response.data.message, null, 2)}`);
    yield put(cartActions.getOrdersFail(error.response.data.message));
  }
}

export default function* cartSaga() {
  yield takeLatest(cartActions.chargeCart.type, handleCreateOrder);
  yield takeLatest(cartActions.getOrders.type, handleGetOrders);
}
