import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IModal, IModalBooking } from '../../interface/modal';
import { RootState } from '../../app/store';

const initialState: IModal = {
  modalBooking: { show: false },
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    showModalBooking(state: IModal, actions: PayloadAction<IModal>) {
      console.log(`[slice][showModalBooking] payload -> ${JSON.stringify(actions.payload)}`);
      state.modalBooking = actions.payload.modalBooking;
    },
    hideModalBooking(state, actions: PayloadAction<IModal>) {
      state.modalBooking = actions.payload.modalBooking;
    },

    resetState(state) {
      state = initialState;
    },
  },
});

export const modalActions = modalSlice.actions;

export const selectShowBooking = (state: RootState) => state.modal.modalBooking;

const modalReducer = modalSlice.reducer;
export default modalReducer;
