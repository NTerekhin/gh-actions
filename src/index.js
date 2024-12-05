import React from 'react';
import ReactDOM from 'react-dom/client';


import {StoreProvider} from "./redux/store-provider";
import {App} from "./components/app";
import {ModalDialogProvider} from "./components/dialog/provider/modal-dialog-provider";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StoreProvider>
        <ModalDialogProvider>
            <App />
        </ModalDialogProvider>
    </StoreProvider>
);