import { useState } from 'react';
import {
	AppBar,
	Toolbar,
	Typography,
	Box,
	Stack,
	Container,
	IconButton,
} from '@mui/material';
import styled from '@emotion/styled';
import { Close, Menu } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const StyledContainer = styled(Container)({
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
});

const Logo = styled(Box)({
	width: '200px',
	height: '45px',
	display: 'flex',
	alignItems: 'center',
	gap: '5px',
});

const Navbar = () => {
	const [open, setOpen] = useState(false);
	const [close, setClose] = useState(false);

	return (
		<AppBar position="sticky" sx={{ background: '#fff' }}>
			<Toolbar>
				<StyledContainer maxWidth="xl">
					<Logo width="100px" height="100px">
						<img
							src={logo}
							alt="Logo"
							style={{
								width: '45px',
							}}
						/>
						<Box>
							<Typography
								variant="h3"
								fontSize="1.3rem"
								fontWeight={900}
								color="#16a34a"
								letterSpacing={1}
							>
								Green<span style={{ color: '#9a7b4f' }}>City</span>
							</Typography>
							<Typography variant="caption" color="#444" marginTop="-5px">
								Delivering Excellence
							</Typography>
						</Box>
					</Logo>
					<Stack
						direction="row"
						gap={5}
						color="#444"
						sx={{
							display: { xs: 'none', sm: 'flex' },
						}}
					>
						<Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
							<Typography fontSize="1.1rem">Home</Typography>
						</Link>
						<Link
							to="/products"
							style={{ textDecoration: 'none', color: 'inherit' }}
						>
							<Typography fontSize="1.1rem">Shop</Typography>
						</Link>
						<Link
							to="/about"
							style={{ textDecoration: 'none', color: 'inherit' }}
						>
							<Typography fontSize="1.1rem">About</Typography>
						</Link>
						<Link
							to="/admin"
							style={{ textDecoration: 'none', color: 'inherit' }}
						>
							<Typography fontSize="1.1rem">Admin</Typography>
						</Link>
					</Stack>
				</StyledContainer>

				{close ? (
					<IconButton
						sx={{ display: { xs: 'block', sm: 'none' } }}
						onClick={() => {
							setOpen(!open);
							setClose(!close);
						}}
					>
						<Close sx={{ fontSize: '28px' }} />
					</IconButton>
				) : (
					<IconButton
						sx={{ display: { xs: 'block', sm: 'none' } }}
						onClick={() => {
							setOpen(!open);
							setClose(!close);
						}}
					>
						<Menu sx={{ fontSize: '30px' }} />
					</IconButton>
				)}
			</Toolbar>
			{open && (
				<Box
					color="#444"
					position="absolute"
					top="3.1rem"
					bgcolor="#fff"
					width="100%"
					display={{ xs: 'block', sm: 'none' }}
					boxShadow="0px 3px 8px -5px rgba(0,0,0,0.75)"
				>
					<Container sx={{ paddingLeft: '2rem', paddingY: '1rem' }}>
						<Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
							<Typography fontSize="1.1rem" mb={1}>
								Home
							</Typography>
						</Link>
						<Link
							to="/products"
							style={{ textDecoration: 'none', color: 'inherit' }}
						>
							<Typography fontSize="1.1rem" mb={1}>
								Shop
							</Typography>
						</Link>
						<Link style={{ textDecoration: 'none', color: 'inherit' }}>
							<Typography fontSize="1.1rem" mb={1}>
								About
							</Typography>
						</Link>
						<Link
							to="/admin"
							style={{ textDecoration: 'none', color: 'inherit' }}
						>
							<Typography fontSize="1.1rem" mb={1}>
								Admin
							</Typography>
						</Link>
					</Container>
				</Box>
			)}
		</AppBar>
	);
};

export default Navbar;
