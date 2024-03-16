import ReactDOM from 'react-dom/client';
import React from 'react';
import './index.css';
import App from './App';
//Step - 05
import { Provider } from 'react-redux';
import Store from './Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={Store}>
        <App />
    </Provider>
);