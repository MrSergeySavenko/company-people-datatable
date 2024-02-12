import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import { Main } from './pages';

import { Provider } from 'react-redux';
import { setupStore } from './__data__/store/store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <Provider store={setupStore()}>
        <Main />
    </Provider>
);
