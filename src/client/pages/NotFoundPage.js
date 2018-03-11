/**
 * Created by heweiguang on 2018/3/11.
 */

import React from 'react';

//staticContext 只存在于服务端
const NotFoundPage = ({ staticContext = {} }) => {
    staticContext.notFound = true;
    return <h1>Route not found.</h1>
};

export default {
    component: NotFoundPage
}
