/**
 * Created by heweiguang on 2018/3/10.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';

// React 将在 v17 不在支持用 render 进行服务端渲染，所以用 hydrate
ReactDOM.hydrate(
    <BrowserRouter>
        <Routes />
    </BrowserRouter>
    , document.querySelector('#root'));
