import { configureStore } from '@reduxjs/toolkit';

import modalReducer from '../features/modal/modalSlice';
import popupReducer from '../features/popup/popupSlice';
import loadingReducer from '../features/loading/loading';

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    popup: popupReducer,
    loading: loadingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
