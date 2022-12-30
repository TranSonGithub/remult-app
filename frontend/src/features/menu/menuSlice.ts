import { RootState } from './../../app/store';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
  success: false,
  message: '',
  item: { img: '', description: '', size: [], type: '' },
  menu: {
    menuDrink: [],
    menuMain: [],
  },
};

const menuSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    createMenu(state, action) {
      console.log(`[slice][createMenu] payload -> ${JSON.stringify(action.payload)}`);
    },
    createMenuFail(state, action) {
      console.log(`[slice][createMenuFail] payload -> ${JSON.stringify(action.payload)}`);
      state.success = false;
      state.message = action.payload;
    },

    updateMenu(state, action) {
      console.log(`[slice][updateMenu] payload -> ${JSON.stringify(action.payload)}`);
    },
    updateMenuFail(state, action) {
      console.log(`[slice][updateMenuFail] payload -> ${JSON.stringify(action.payload)}`);
      state.success = false;
      state.message = action.payload;
    },

    getMenus(state, action) {
      console.log(`[slice][getMenus] payload -> ${JSON.stringify(action.payload)}`);
    },
    getMenusSuccess(state, action) {
      console.log(`[slice][getMenusSuccess] payload -> ${JSON.stringify(action.payload)}`);
      state.menu = action.payload;
    },
    getMenusFail(state, action) {
      console.log(`[slice][getMenusFail] payload -> ${JSON.stringify(action.payload)}`);
      state.success = false;
      state.message = action.payload;
    },

    resetState(state) {
      state = initialState;
    },
  },
});

export const menuActions = menuSlice.actions;

export const selectMenuList = (state: RootState) => state.menu.menu;

const menuReducer = menuSlice.reducer;
export default menuReducer;
