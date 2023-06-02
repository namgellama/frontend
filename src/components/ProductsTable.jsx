import { Add } from '@mui/icons-material';
import {
	Box,
	Container,
	IconButton,
	Stack,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	Tooltip,
	Typography,
} from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../features/product/productSlice';

const ProductsTable = () => {
	const dispatch = useDispatch();
	const { productItems } = useSelector((store) => store.product);

	return (
		<Container sx={{ marginTop: '2rem' }}>
			<Stack
				direction="row"
				justifyContent="space-between"
				alignItems="center"
				bgcolor="#f7f7f7"
				px={3}
				py={1}
				mb={0.5}
				borderBottom="1px solid gray"
			>
				<Typography fontSize="1.8rem" fontWeight="bold">
					Products
				</Typography>
				<Tooltip title="Add Product">
					<IconButton onClick={() => dispatch(addProduct())}>
						<Add />
					</IconButton>
				</Tooltip>
			</Stack>
			<Table bgcolor="#f4f4f4">
				<TableHead>
					<TableRow>
						<TableCell component="th">No.</TableCell>
						<TableCell component="th">Name</TableCell>
						<TableCell component="th" align="center">
							Price
						</TableCell>
						<TableCell component="th" align="center">
							Count In Stock
						</TableCell>
						<TableCell component="th" align="center">
							Featured
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{productItems.map((product) => (
						<TableRow>
							<TableCell component="td">{product.id}</TableCell>
							<TableCell component="td">
								{product.name} {product.flavour}
							</TableCell>
							<TableCell component="td" align="center">
								{product.price}
							</TableCell>
							<TableCell component="td" align="center">
								{product.countInStock}
							</TableCell>
							<TableCell component="td" align="center">
								{product.featured ? 'Yes' : 'No'}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</Container>
	);
};

export default ProductsTable;
