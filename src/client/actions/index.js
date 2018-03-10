/**
 * Created by heweiguang on 2018/3/10.
 */

import axios from 'axios';

export const FETCH_USERS = 'fetch_users';

export const fetchUsers = () => async dispatch => {
    const res = await axios.get('http://react-ssr-api.herokuapp.com/users');

    dispatch({
        type: FETCH_USERS,
        payload: res
    })
};
