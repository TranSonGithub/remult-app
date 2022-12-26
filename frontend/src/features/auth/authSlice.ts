import { IResponse } from './../../interface/auth';
import { RootState } from './../../app/store';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: localStorage.getItem('token'),
  success: false,
  message: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      console.log(`[slice][login] payload -> ${JSON.stringify(action.payload)}`);
    },
    loginSuccess(state, action) {
      console.log(`[slice][login] payload -> ${JSON.stringify(action.payload)}`);
      state.token = action.payload.token;
      localStorage.getItem('token');
    },
    loginFailed(state, action) {
      state.success = false;
      state.message = action.payload;
    },

    clearState(state, action) {
      console.log(`[slice][clearState]`);
      state = initialState;
    },
  },
});

export const authActions = authSlice.actions;

export const selectAuthToken = (state: RootState) => state.auth.token;

const authReducer = authSlice.reducer;
export default authReducer;
