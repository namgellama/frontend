import { Box, Button, Card, Container, TextField } from '@mui/material';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../features/product/productSlice';

const ProductForm = () => {
	const nameRef = useRef(null);
	const priceRef = useRef(null);
	const descriptionRef = useRef(null);
	const flavourRef = useRef(null);
	const countInStockRef = useRef(null);

	const { productItems } = useSelector((store) => store.products);
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();

		if (
			nameRef.current.value &&
			priceRef.current.value &&
			descriptionRef.current.value &&
			flavourRef.current.value &&
			countInStockRef.current.value
		) {
			const newProduct = {
				id: productItems.length + 1,
				title: nameRef.current.value,
				price: nameRef.current.value,
				image: '/images/3Sisters_Cranberry_Zero.jpg',
				featured: true,
				description: descriptionRef.current.value,
				flavour: flavourRef.current.value,
				countInStock: countInStockRef.current.value,
			};
			dispatch(addProduct(newProduct));
			nameRef.current.value = '';
			priceRef.current.value = '';
			descriptionRef.current.value = '';
			flavourRef.current.value = '';
			countInStockRef.current.value = '';
		}
	};

	return (
		<Container maxWidth="sm">
			<Card sx={{ padding: '1rem' }}>
				<form onSubmit={handleSubmit}>
					<Box marginBottom={2}>
						<TextField
							inputRef={nameRef}
							id="outlined-basic"
							label="Name"
							variant="outlined"
							fullWidth
						/>
					</Box>
					<Box marginBottom={2}>
						<TextField
							inputRef={priceRef}
							id="outlined-basic"
							label="Price"
							variant="outlined"
							fullWidth
							type="number"
						/>
					</Box>
					<Box marginBottom={2}>
						<TextField
							inputRef={descriptionRef}
							id="outlined-basic"
							label="Description"
							variant="outlined"
							fullWidth
						/>
					</Box>
					<Box marginBottom={2}>
						<TextField
							inputRef={flavourRef}
							id="outlined-basic"
							label="Flavour"
							variant="outlined"
							fullWidth
						/>
					</Box>
					<Box marginBottom={2}>
						<TextField
							inputRef={countInStockRef}
							id="outlined-basic"
							label="Count In Stock"
							variant="outlined"
							fullWidth
							type="number"
						/>
					</Box>
					<Button variant="contained" type="submit">
						Add Product
					</Button>
				</form>
			</Card>
		</Container>
	);
};

export default ProductForm;
