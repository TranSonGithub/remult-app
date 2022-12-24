import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';

import modalReducer from '../features/modal/modalSlice';
import popupReducer from '../features/popup/popupSlice';
import loadingReducer from '../features/loading/loading';
import authReducer from '../features/auth/authSlice';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    popup: popupReducer,
    loading: loadingReducer,
    auth: authReducer,
  },
  middleware,
});
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
