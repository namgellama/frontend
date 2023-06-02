import { Box, Container, Typography, Button, Stack } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCart } from '../features/cart/cartSlice';

const ProductDetail = () => {
	const { id } = useParams();
	const dispatch = useDispatch();

	const { productItems } = useSelector((store) => store.product);
	const product = productItems.find((item) => item.id === parseInt(id));

	return (
		<Container sx={{ marginBottom: '4.5rem' }}>
			<Stack direction="row" gap={5}>
				<img style={{ width: '500px' }} src={product.image} alt="" />
				<Box>
					<Typography variant="h3" fontSize="2rem">
						{product.name} ({product.flavour})
					</Typography>
					<Typography variant="body1" fontSize="1.5rem">
						Rs. {product.price}
					</Typography>
					<Box my={2}>
						<Button
							variant="contained"
							onClick={() => dispatch(addToCart(product))}
						>
							Order
						</Button>
					</Box>
					<Typography variant="body1" fontSize="1.2rem" textAlign="justify">
						{product.description}
					</Typography>
				</Box>
			</Stack>
		</Container>
	);
};

export default ProductDetail;
