import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IModal, IModalBooking } from '../../interface/modal';
import { RootState } from '../../app/store';
import { typeModal } from '../../utils/constants';

const initialState: IModal = {
  modalBooking: { show: false },
  modalAddMenu: { show: false },
  type: null,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    showModal(state: IModal, actions: PayloadAction<IModal>) {
      const type = actions.payload.type;
      switch (type) {
        case typeModal.modalBooking:
          state.modalBooking = actions.payload.modalBooking;
        case typeModal.modalAddMenu:
          state.modalAddMenu = actions.payload.modalAddMenu;
      }
    },
    hideModal(state, actions: PayloadAction<IModal>) {
      state.modalBooking = actions.payload.modalBooking;
    },

    resetState(state) {
      state = initialState;
    },
  },
});

export const modalActions = modalSlice.actions;

export const selectModalBooking = (state: RootState) => state.modal.modalBooking;
export const selectModalAddMenu = (state: RootState) => state.modal.modalAddMenu;

const modalReducer = modalSlice.reducer;
export default modalReducer;
