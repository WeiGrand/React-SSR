/**
 * Created by heweiguang on 2018/3/10.
 */

//因为用了babel转译，node 也可以用es6 module
import 'babel-polyfill'; // 用于 async await
import express from 'express';
import proxy from 'express-http-proxy';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const app = express();

app.use('/api', proxy('http://react-ssr-api.herokuapp.com', {
    proxyReqOptDecorator(opts) {
        opts.headers['x-forwarded-host'] = 'localhost:3000'; //用于 google 登录完成跳转
        return opts;
    }
}));
app.use(express.static('public'));

app.get('*', (req, res) => {
    //服务端store
    const store = createStore(req);

    /**
     * [ { route:
     { loadData: [Function: loadData],
       path: '/users',
       component: [Object] },
    match: { path: '/users', url: '/users', isExact: true, params: {} } } ]
     */
    const promises = matchRoutes(Routes, req.path).map(({ route }) => {
        const {
            loadData
        } = route;

        return loadData ? loadData(store) : null;
    });

    Promise.all(promises).then(() => {
        res.send(renderer(req, store));
    });
});

app.listen(3000, () => {
    console.log('Listening on port 3000')
});
