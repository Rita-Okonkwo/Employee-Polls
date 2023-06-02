import { _getQuestions } from "../utils/_DATA"

export const GET_QUESTIONS = 'GET_QUESTIONS'

const getQuestionsAction = (questions) => {
    return {
        type: GET_QUESTIONS,
        questions
    }
}

export const getQuestions = () => {
    return (dispatch) => {
        _getQuestions().then(({questions}) => {
            dispatch(getQuestionsAction(questions))
        })
    }
}