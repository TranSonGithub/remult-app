import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IModal, IModalBooking } from '../../interface/modal';
import { RootState } from '../../app/store';
import { typeModal } from '../../utils/constants';
import { ILoading } from '../../interface/loading';

const initialState: ILoading = {
  show: false,
};

const loadingSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    changeLoading(state: ILoading, actions: PayloadAction<ILoading>) {
      state.show = actions.payload.show;
    },

    resetState(state) {
      state = initialState;
    },
  },
});

export const loadingActions = loadingSlice.actions;

export const selectShow = (state: RootState) => state.loading.show;

const loadingReducer = loadingSlice.reducer;
export default loadingReducer;
