import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ApiProvider from './context/ApiProvider.jsx';

ReactDOM.render(
    <ApiProvider>
        <App />
    </ApiProvider>,
    document.getElementById('root')
);