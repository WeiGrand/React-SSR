/**
 * Created by heweiguang on 2018/3/10.
 */

import {
    FETCH_USERS
} from "../actions";

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_USERS:
            return action.payload.data;
        default:
            return state;
    }
}
