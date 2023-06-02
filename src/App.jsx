import { Navbar, Footer } from './components';
import styled from '@emotion/styled';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { getProductsItems } from './features/product/productSlice';

const Main = styled('main')({
	marginTop: '5rem',
});

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProductsItems());
	}, []);

	return (
		<>
			<Navbar />
			<Outlet />
			<Footer />
		</>
	);
}

export default App;
