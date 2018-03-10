/**
 * Created by heweiguang on 2018/3/10.
 */

//因为用了babel转译，node 也可以用es6 module
import express from 'express';
import renderer from './helpers/renderer';

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {

    res.send(renderer());
});

app.listen(3000, () => {
    console.log('Listening on port 3000')
});
