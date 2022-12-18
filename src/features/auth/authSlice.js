import { createSlice } from "@reduxjs/toolkit";
import { StorageConstants } from "utils/enum";

const initialState = {
    isLoggedIn: false,
    logging: false,
    loading: false,
    currentUser: {},
    error: null,
    token: localStorage.getItem(StorageConstants.ACCESS_TOKEN),
    units: localStorage.getItem(StorageConstants.UNITS),
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action) {
            state.logging = true;
        },
        loginSuccess(state, action) {
            state.isLoggedIn = true;
            state.logging = false;
            state.currentUser = action.payload.user;
            state.token = action.payload.token;
        },
        loginFailed(state, action) {
            state.logging = false;
            state.error = action.payload;
        },
        logout(state) {
            state.isLoggedIn = false;
            state.currentUser = {};
            state.token = null;
        },
        updateProfile(state, action) {
            state.currentUser = action.payload;
        },
        getUserByToken(state, action) {
            state.loading = true;
        },
        getUserByTokenSuccess(state, action) {
            state.loading = false;
            state.currentUser = action.payload;
        },
        getUserByTokenFail(state, action) {
            state.loading = false;
        },
        updateUnits(state, action) {
            state.logging = true;
        },
        updateUnitsSuccess(state, action) {
            state.logging = false;
        },
        updateUnitsFail(state) {
            state.logging = false;
        },
        resetPassword(state, action) {
            state.loading = true;
        },
        resetPasswordSuccess(state, action) {
            state.loading = false;
        },
        resetPasswordFail(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
        resetError(state) {
            state.error = null;
        },
        changeUnits(state, action) {
            state.units = action.payload;
        }
    }
});

export const authActions = authSlice.actions;

export const selectAuthLogging = (state) => state.auth.logging;
export const selectAuthToken = (state) => state.auth.token;
export const selectAuthCurrentUser = (state) => state.auth.currentUser;
export const selectAuthError = (state) => state.auth.error;
export const selectAuthUnits = (state) => state.auth.units;

const authReducer = authSlice.reducer;
export default authReducer;