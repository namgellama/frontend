import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import products from '../../data/products';

const url = 'http://localhost:3000/products';

const initialState = {
	productItems: [],
	isLoading: true,
};

export const getProductsItems = createAsyncThunk(
	'product/getProductItems',
	async () => {
		try {
			const { data } = await axios.get(url);
			return data;
		} catch (error) {
			console.log(error.message);
		}
	}
);

const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {
		removeProduct: (state, action) => {
			const productId = action.payload;
			state.productItems = state.productItems.filter(
				(product) => product.id !== productId
			);
		},
		addProduct: (state, action) => {
			// state.productItems.push(action.payload);

			const newProduct = {
				id: state.productItems.length + 1,
				title: 'heh',
				price: 123,
				image: '/images/3Sisters_Cranberry_Zero.jpg',
				featured: true,
				description: 'adfa',
				flavour: 'dfaaf',
				countInStock: 23,
			};

			state.productItems.push(newProduct);
		},
		removeAllProducts: (state) => {
			state.productItems = [];
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getProductsItems.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getProductsItems.fulfilled, (state, action) => {
				state.isLoading = false;
				state.productItems = action.payload;
			})
			.addCase(getProductsItems.rejected, (state) => {
				state.isLoading = false;
			});
	},
});

export const { removeProduct, addProduct, removeAllProducts } =
	productSlice.actions;

export default productSlice.reducer;
