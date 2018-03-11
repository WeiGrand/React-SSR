/**
 * Created by heweiguang on 2018/3/11.
 */

import {
    FETCH_ADMINS
} from "../actions";

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_ADMINS:
            return action.payload.data;
        default:
            return state;
    }
}
