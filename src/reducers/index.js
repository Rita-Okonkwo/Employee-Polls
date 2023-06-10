import { combineReducers } from "redux";
import { userReducer } from "./user";
import { questionReducer } from "./questions";
import { authReducer } from "./authedUser";

export default combineReducers({
    userReducer,
    questionReducer,
    authReducer
})