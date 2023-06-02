import { Add } from '@mui/icons-material';
import {
	Card,
	CardMedia,
	CardContent,
	Typography,
	IconButton,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addProduct } from '../features/product/productSlice';

const Product = ({ product }) => {
	const dispatch = useDispatch();

	return (
		<Card sx={{ width: '341px', height: '430px' }}>
			<Link
				color="inherit"
				style={{ textDecoration: 'none', color: 'inherit' }}
				to={`/products/${product.id}`}
			>
				<CardMedia
					image={product.image}
					sx={{ width: 'full', height: '340px', objectFit: 'cover' }}
				/>
				<CardContent>
					<Typography
						variant="h3"
						fontSize="1.3rem"
						fontWeight={700}
						textAlign="center"
					>
						{product.name} ({product.flavour})
					</Typography>
					<Typography
						fontSize="1.3rem"
						fontWeight={700}
						textAlign="center"
						sx={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						Rs. {product.price}
						{/* <IconButton onClick={() => dispatch(addProduct())}>
							<Add />
						</IconButton> */}
					</Typography>
				</CardContent>
			</Link>
		</Card>
	);
};

export default Product;
