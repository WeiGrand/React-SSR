/**
 * Created by heweiguang on 2018/3/10.
 */

import 'babel-polyfill'; // 用于 async await
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import axios from 'axios';
import Routes from './Routes';
import reducers from './reducers';

const axiosInstance = axios.create({
    baseURL: '/api'
});

//客户端store
const store = createStore(reducers, window.INITIAL_STATE, applyMiddleware(thunk.withExtraArgument(axiosInstance)));

// React 将在 v17 不再支持用 render 进行服务端渲染，所以用 hydrate
ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                {renderRoutes(Routes)}
            </div>
        </BrowserRouter>
    </Provider>
    , document.querySelector('#root'));
