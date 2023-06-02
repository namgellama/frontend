import {
	Box,
	Container,
	Typography,
	Card,
	CardMedia,
	CardContent,
	Grid,
	Link,
} from '@mui/material';
import products from '../data/products';
import showcase from '../assets/showcase.jpg';
import { useSelector } from 'react-redux';
import Product from './Product';

const HomePage = () => {
	const { productItems } = useSelector((store) => store.product);

	const products = productItems.filter((product) => product.featured === true);

	return (
		<Box>
			<img
				src={showcase}
				alt=""
				style={{
					objectFit: 'cover',
					width: '100%',
					height: '80vh',
				}}
			/>
			<Container sx={{ marginY: '3rem' }}>
				<Typography
					marginBottom={5}
					textAlign="center"
					variant="h1"
					fontSize="2rem"
					fontWeight={700}
				>
					Featured Products
				</Typography>
				<Grid container gap={{ xs: 4, md: 2, lg: 7 }} justifyContent="center">
					{products.map((product) => (
						<Product product={product} key={product.id} />
					))}
				</Grid>
			</Container>
		</Box>
	);
};

export default HomePage;
