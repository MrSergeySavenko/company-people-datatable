import ReactDOM from 'react-dom/client';
import 'react-loading-skeleton/dist/skeleton.css';
import './style/index.scss';

import { Provider } from 'react-redux';
import { setupStore } from './__data__/store/store';

import { BrowserRouter } from 'react-router-dom';
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
