import { GET_QUESTIONS, SAVE_QUESTION, SET_VOTE } from "../actions/questions";

export const questionReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case SET_VOTE:
            return {
                ...state,
                [action.qid]: {
                    ...state[action.qid],
                    [action.answer]: {
                        ...state[action.qid][action.answer],
                        votes: state[action.qid][action.answer].votes.concat([action.authedUser])
                    }
                }
            }
        case SAVE_QUESTION:
            return state
        default:
            return state
    }
}