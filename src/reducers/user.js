import { GET_USERS } from "../actions/user";

export const userReducer = (state = {}, action) => {
    switch(action.type) {
        case GET_USERS:
            return {
                ...state,
                ...action.users
            }
        default:
            return state
    }
}