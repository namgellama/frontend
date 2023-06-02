import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ThemeProvider } from '@emotion/react';
import { theme } from './theme.js';
import { Provider } from 'react-redux';
import store from './store.js';
import { RouterProvider } from 'react-router-dom';
import { router } from './router.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router}>
				<ThemeProvider theme={theme}>
					<App />
				</ThemeProvider>
			</RouterProvider>
		</Provider>
	</React.StrictMode>
);
