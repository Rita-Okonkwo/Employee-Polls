import { SAVE_QUESTION, SET_VOTE } from "../actions/questions";
import { GET_USERS } from "../actions/user";

export const userReducer = (state = {}, action) => {
    switch(action.type) {
        case GET_USERS:
            return {
                ...state,
                ...action.users
            }
        case SET_VOTE:
            return {
                ...state,
                [action.authedUser]: {
                    ...state[action.authedUser],
                    answers: {
                        ...state[action.authedUser].answers,
                        [action.qid]: action.answer
                    }
                }
            }
        case SAVE_QUESTION:
            return {
                ...state,
                [action.author]: {
                    ...state[action.author],
                    questions: state[action.author].questions.concat(['00'])
                }
            }
        default:
            return state
    }
}