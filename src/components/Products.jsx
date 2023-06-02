import { Container, Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import Product from './Product';

const Products = ({}) => {
	const { productItems } = useSelector((store) => store.product);

	return (
		<Container sx={{ marginTop: '3rem' }}>
			<Typography textAlign="center" fontSize="2.5rem" fontWeight={500} mb={4}>
				All Products
			</Typography>
			<Grid container gap={{ xs: 4, md: 2, lg: 7 }} justifyContent="center">
				{productItems.map((product) => (
					<Product product={product} key={product.id} />
				))}
			</Grid>
		</Container>
	);
};

export default Products;
