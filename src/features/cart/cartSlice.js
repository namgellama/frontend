import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	cartItems: [],
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action) => {
			state.cartItems.push(action.payload);
		},
		removeItems: (state) => {
			state.cartItems = [];
		},
	},
});

export const { addToCart, removeItems } = cartSlice.actions;

export default cartSlice.reducer;
