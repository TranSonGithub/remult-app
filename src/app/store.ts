import { configureStore } from '@reduxjs/toolkit';

import modalReducer from '../features/modal/modalSlice';
import popupReducer from '../features/popup/popupSlice';

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    popup: popupReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
