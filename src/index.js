/**
 * Created by heweiguang on 2018/3/10.
 */

//因为用了babel转译，node 也可以用es6 module

import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from './client/components/Home';

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    const content = renderToString(<Home />);

    const html = `
        <html>
            <head></head>
            <body>
                <div id="root">${content}</div>
                <script src="bundle.js"></script>
            </body>        
        </html>
    `;

    res.send(html);
});

app.listen(3000, () => {
    console.log('Listening on port 3000')
});
