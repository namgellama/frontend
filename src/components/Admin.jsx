import { Delete } from '@mui/icons-material';
import { Box, Container, IconButton, List, ListItem } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { removeProduct } from '../features/product/productSlice';
import ProductsTable from './ProductsTable';

const Admin = () => {
	const dispatch = useDispatch();
	const { productItems } = useSelector((store) => store.product);

	return (
		// <Box>
		// 	All Products
		// 	<List>
		// 		{productItems.map((product) => (
		// 			<Box>
		// 				<ListItem>
		// 					{product.title} - {product.flavour}
		// 					<IconButton onClick={() => dispatch(removeProduct(product.id))}>
		// 						<Delete />
		// 					</IconButton>
		// 				</ListItem>
		// 			</Box>
		// 		))}
		// 	</List>
		// </Box>
		<Container>
			<ProductsTable />
		</Container>
	);
};

export default Admin;
