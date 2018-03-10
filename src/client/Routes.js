/**
 * Created by heweiguang on 2018/3/10.
 */

import React from 'react';
import HomePage from './pages/HomePage';
import UsersListPage from './pages/UsersListPage';

export default [
    {
        ...HomePage,
        path: '/',
        exact: true
    },
    {
        ...UsersListPage,
        path: '/users'
    }
]
