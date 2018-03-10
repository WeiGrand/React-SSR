/**
 * Created by heweiguang on 2018/3/10.
 */

import { combineReducers } from 'redux';
import userReducer from './usersReducers';

export default combineReducers({
    users: userReducer
});
