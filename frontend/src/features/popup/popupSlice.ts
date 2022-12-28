import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IModal, IModalBooking, IPopup } from '../../interface/modal';
import { RootState } from '../../app/store';

const initialState: IPopup = {
  show: false,
  content: '',
  numberButton: 2,
  type: '',
};

const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    showPopup(state: IPopup, actions: PayloadAction<IPopup>) {
      console.log(`[cartSlice] payload -> ${JSON.stringify(actions.payload, null, 2)}`);
      state.show = actions.payload.show;
      state.content = actions.payload.content;
      state.numberButton = actions.payload.numberButton;
    },
    hidePopup(state, actions: PayloadAction<IPopup>) {
      state.show = actions.payload.show;
    },

    resetPhoneNumber(state) {
      state.phoneNumber = undefined;
    },

    resetState(state) {
      state = initialState;
    },
  },
});

export const popupActions = popupSlice.actions;

export const selectShowPopup = (state: RootState) => state.popup.show;
export const selectContentPopup = (state: RootState) => state.popup.content;
export const selectNumberButtonPopup = (state: RootState) => state.popup.numberButton;
export const selectTypePopup = (state: RootState) => state.popup.type;

const popupReducer = popupSlice.reducer;
export default popupReducer;
