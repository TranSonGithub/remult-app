import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IModal, IModalBooking, IPopup } from '../../interface/modal';
import { RootState } from '../../app/store';

const initialState: IPopup = {
  show: false,
  content: '',
  numberButton: 2,
};

const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    showPopup(state: IPopup, actions: PayloadAction<IPopup>) {
      console.log(`[slice][showModalBooking] payload -> ${JSON.stringify(actions.payload)}`);
      state.show = actions.payload.show;
    },
    hidePopup(state, actions: PayloadAction<IPopup>) {
      state.show = actions.payload.show;
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

const popupReducer = popupSlice.reducer;
export default popupReducer;
