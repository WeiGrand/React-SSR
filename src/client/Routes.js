/**
 * Created by heweiguang on 2018/3/10.
 */

import React from 'react';
import Home from './components/Home';
import UsersList, { loadData } from './components/UsersList';

export default [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        loadData,
        path: '/users',
        component: UsersList
    }
]
