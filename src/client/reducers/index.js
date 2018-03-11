/**
 * Created by heweiguang on 2018/3/10.
 */

import { combineReducers } from 'redux';
import userReducer from './usersReducers';
import authReducer from './authReducer';
import adminsReducer from './adminsReducer';

export default combineReducers({
    users: userReducer,
    auth: authReducer,
    admins: adminsReducer
});
