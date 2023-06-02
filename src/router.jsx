import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from 'react-router-dom';
import {
	HomePage,
	Products,
	ProductDetail,
	ProductForm,
	Admin,
} from './components';
import App from './App.jsx';

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App />}>
			<Route index={true} path="/" element={<HomePage />} />
			<Route path="/products" element={<Products />} />
			<Route path="/products/:id" element={<ProductDetail />} />
			<Route path="/admin" element={<Admin />} />
			<Route path="/admin/product-add" element={<ProductForm />} />
		</Route>
	)
);
