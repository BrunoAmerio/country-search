import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloProvider } from '@apollo/client';

import Client from './config/ApolloClient';
import reportWebVitals from './reportWebVitals';

import AppContextProvider from './context/AppContext';

import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<ApolloProvider client={Client}>
		<AppContextProvider>
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</AppContextProvider>
	</ApolloProvider>
);

reportWebVitals();
