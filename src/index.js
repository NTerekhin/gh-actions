import React from 'react';
import ReactDOM from 'react-dom/client';


import {StoreProvider} from "./redux/store-provider";
import {App} from "./components/app";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StoreProvider>
        <App />
    </StoreProvider>
);