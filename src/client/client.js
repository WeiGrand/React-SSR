/**
 * Created by heweiguang on 2018/3/10.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';

// React 将在 v17 不在支持用 render 进行服务端渲染，所以用 hydrate
ReactDOM.hydrate(<Home />, document.querySelector('#root'));
