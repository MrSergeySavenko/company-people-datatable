import React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-loading-skeleton/dist/skeleton.css';
import './style/index.scss';
import { Main } from './pages';

import { Provider } from 'react-redux';
import { setupStore } from './__data__/store/store';

import { BrowserRouter, createBrowserRouter } from 'react-router-dom';
import { RouterDetails } from './pages/RouterDetails/RouterDetails';
import { Router } from './components/Router';

import moment from 'moment';
import 'moment/locale/ru';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

moment.locale('ru');

root.render(
    <Provider store={setupStore()}>
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    </Provider>
);
