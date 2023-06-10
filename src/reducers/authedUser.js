import { SET_AUTHED_USER } from "../actions/authedUser";
import { LOGOUT_USER } from "../actions/authedUser";

export const authReducer = (state = null, action) => {
    switch (action.type) {
        case SET_AUTHED_USER:
            return action.user_id
        case LOGOUT_USER:
            return null
        default:
            return state
    }
}