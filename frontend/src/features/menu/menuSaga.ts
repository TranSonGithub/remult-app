import { modalActions } from './../modal/modalSlice';
import { menuActions } from './menuSlice';
import { call, put, takeLatest } from 'redux-saga/effects';
import menuApi from '../../api/menu';
import { history } from '../../utils/history';
import { routerAdmin } from './../../utils/route';
import { loadingActions } from './../loading/loading';
import fileApi from '../../api/file';
import { typeModal } from '../../utils/constants';

function* handleCreateMenu(action: any): any {
  try {
    console.log(`[Saga][handleCreateMenu]`);

    const { img } = action.payload;
    const formData = new FormData();
    formData.append('file', img);
    console.log(`[Saga][handleCreateMenu] formData-> ${JSON.stringify(formData.getAll('file'), null, 2)}`);

    // Upload image
    const responsefile = yield call(fileApi.upload, formData);
    console.log(`[Saga][handleCreateMenu] responsefile-> ${JSON.stringify(responsefile.data.link, null, 2)}`);

    // Create menu
    const newMenu = {
      ...action.payload,
      img: responsefile.data.link,
    };
    const response = yield call(menuApi.create, newMenu);
    const data = response.data;
    console.log(`[Saga][handleCreateMenu] dataResponse-> ${JSON.stringify(data.message, null, 2)}`);

    history.push(routerAdmin.menu);
    yield put(menuActions.getMenus({}));
    yield put(modalActions.showModal({ modalAddMenu: { show: false }, type: typeModal.modalAddMenu } as any));
    yield put(loadingActions.changeLoading({ show: false }));
  } catch (error: any) {
    console.log(`[Saga][handleCreateMenu] dataResponse-> ${JSON.stringify(error.response.data.message, null, 2)}`);
    yield put(menuActions.createMenuFail(error.response.data.message));
  }
}

function* handleUpdateMenu(action: any): any {
  try {
    console.log(`[Saga][handleUpdateMenu]`);

    let responsefile;
    const { _id, body } = action.payload;
    if (body.img) {
      const formData = new FormData();
      formData.append('file', body.img);
      console.log(`[Saga][handleUpdateMenu] formData-> ${JSON.stringify(formData.getAll('file'), null, 2)}`);

      // Upload image
      responsefile = yield call(fileApi.upload, formData);
      console.log(`[Saga][handleUpdateMenu] responsefile-> ${JSON.stringify(responsefile.data.link, null, 2)}`);
    }

    // Create menu
    const updateMenu = responsefile
      ? {
          _id,
          body: {
            ...body,
            img: responsefile.data.link,
          },
        }
      : { _id, body };
    const response = yield call(menuApi.update, updateMenu);
    const data = response.data;
    console.log(`[Saga][handleUpdateMenu] dataResponse-> ${JSON.stringify(data.message, null, 2)}`);

    history.push(routerAdmin.menu);
    yield put(menuActions.getMenus({}));
    yield put(modalActions.showModal({ modalAddMenu: { show: false }, type: typeModal.modalAddMenu } as any));
    yield put(loadingActions.changeLoading({ show: false }));
  } catch (error: any) {
    console.log(`[Saga][handleUpdateMenu] dataResponse-> ${JSON.stringify(error.response.data.message, null, 2)}`);
    yield put(menuActions.createMenuFail(error.response.data.message));
  }
}

function* handleGetMenus(action: any): any {
  try {
    console.log(`[Saga][handleGetMenus]`);

    const response = yield call(menuApi.get, action.payload);
    const data = response.data;
    console.log(`[Saga][handleGetMenus] dataResponse-> ${JSON.stringify(data.data, null, 2)}`);

    yield put(loadingActions.changeLoading({ show: false }));
    yield put(menuActions.getMenusSuccess(data.data.menus));
  } catch (error: any) {
    console.log(`[Saga][handleCreateMenu] dataResponse-> ${JSON.stringify(error.response.data.message, null, 2)}`);
    yield put(menuActions.createMenuFail(error.response.data.message));
  }
}

export default function* menuSaga() {
  yield takeLatest(menuActions.createMenu.type, handleCreateMenu);
  yield takeLatest(menuActions.getMenus.type, handleGetMenus);
  yield takeLatest(menuActions.updateMenu.type, handleUpdateMenu);
}
