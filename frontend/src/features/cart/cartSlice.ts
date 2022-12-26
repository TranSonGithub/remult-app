import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { history } from '../../utils/history';
import { routerUser } from './../../utils/route';

const initialState = {
  total: 0,
  items: [],
  success: false,
  message: '',
  orders: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart(state, actions) {
      console.log(`[cartSlice] payload -> ${JSON.stringify(actions.payload, null, 2)}`);
      state.total = actions.payload.total;
      const item = actions.payload.item as never;
      state.items.push(item);
    },
    removeCart(state, actions) {
      state.items = actions.payload.items;
    },

    chargeCart(state, actions) {
      console.log(`[cartSlice][chargeCart] payload -> ${JSON.stringify(actions.payload, null, 2)}`);
    },
    chargeCartFail(state, actions) {
      console.log(`[slice][getMenusFail] payload -> ${JSON.stringify(actions.payload)}`);
      state.success = false;
      state.message = actions.payload;
    },

    getOrders(state, actions) {
      console.log(`[cartSlice][chargeCart] payload -> ${JSON.stringify(actions.payload, null, 2)}`);
    },
    getOrdersSuccess(state, actions) {
      console.log(`[cartSlice][chargeCart] payload -> ${JSON.stringify(actions.payload, null, 2)}`);
      state.orders = actions.payload;
    },
    getOrdersFail(state, action) {
      console.log(`[slice][getMenusFail] payload -> ${JSON.stringify(action.payload)}`);
      state.success = false;
      state.message = action.payload;
    },

    resetState(state) {
      state = initialState;
    },
  },
});

export const cartActions = cartSlice.actions;

export const selectCartNumber = (state: RootState) => state.cart.items.length;
export const selectCartTotal = (state: RootState) => state.cart.total;
export const selectCartItems = (state: RootState) => state.cart.items;
export const selectOrders = (state: RootState) => state.cart.orders;

const cartReducer = cartSlice.reducer;
export default cartReducer;
