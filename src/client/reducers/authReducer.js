/**
 * Created by heweiguang on 2018/3/11.
 */

import {
    FETCH_CURRENT_USER
} from "../actions";

export default function(state = null, action) {
    switch (action.type) {
        case FETCH_CURRENT_USER:
            return action.payload.data || false
        default:
            return state;
    }
}
