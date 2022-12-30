import { popupActions } from './../popup/popupSlice';
import { loadingActions } from './../loading/loading';
import { createOrder } from './../../../../server/services/order';
import { cartActions } from './cartSlice';
import { call, takeLatest, put } from 'redux-saga/effects';
import orderApi from '../../api/order';

function* handleCreateOrder(action: any): any {
  try {
    console.log(`[Saga][handleCreateOrder] payload -> ${JSON.stringify(action.payload, null, 2)}`);
    console.log(
      `[Saga][handleCreateOrder] guestInfo -> ${JSON.stringify(action.payload.guestInfo.phoneNumber, null, 2)}`
    );

    const response = yield call(orderApi.create, action.payload);
    const data = response.data;
    console.log(`[Saga][handleCreateOrder] dataResponse-> ${JSON.stringify(data.message, null, 2)}`);

    yield put(loadingActions.changeLoading({ show: false }));
    yield put(
      popupActions.showPopup({
        show: true,
        content: 'Đặt hàng thành công!',
        numberButton: 1,
        type: 'PAYMENT',
      })
    );
    yield put(cartActions.addPhoneNumber({ phoneNumber: action.payload.guestInfo.phoneNumber }));
  } catch (error: any) {
    console.log(`[Saga][handleCreateOrder] dataResponse-> ${JSON.stringify(error.response.data.message, null, 2)}`);
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

function* handleUpdateOrder(action: any): any {
  try {
    const response = yield call(orderApi.update, action.payload);
    const data = response.data;
    console.log(`[Saga][handleUpdateOrder] dataResponse-> ${JSON.stringify(data.data, null, 2)}`);

    yield put(loadingActions.changeLoading({ show: false }));
    yield put(
      popupActions.hidePopup({
        show: false,
        content: '',
        numberButton: 0,
        type: 'PAYMENT',
      })
    );

    // yield put(cartActions.getOrdersSuccess(data.data.orders));
  } catch (error: any) {
    console.log(`[Saga][handleUpdateOrder] dataResponse-> ${JSON.stringify(error.response.data.message, null, 2)}`);
    yield put(cartActions.getOrdersFail(error.response.data.message));
  }
}

export default function* cartSaga() {
  yield takeLatest(cartActions.chargeCart.type, handleCreateOrder);
  yield takeLatest(cartActions.getOrders.type, handleGetOrders);
  yield takeLatest(cartActions.updateOrder.type, handleUpdateOrder);
}
