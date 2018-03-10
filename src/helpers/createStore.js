/**
 * Created by heweiguang on 2018/3/10.
 */

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../client/reducers';

export default () => {
    const store = createStore(reducers, {}, applyMiddleware(thunk));

    return store;
}
