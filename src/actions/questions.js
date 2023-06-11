import { saveQuestionAnswer, saveQuestion } from "../utils/helper"

export const GET_QUESTIONS = 'GET_QUESTIONS'
export const SET_VOTE = 'SET_VOTE'
export const SAVE_QUESTION = 'SAVE_QUESTION'

export const getQuestionsAction = (questions) => {
    return {
        type: GET_QUESTIONS,
        questions
    }
}

export const setVoteAction = ({authedUser, qid, answer}) => {
    return {
        type: SET_VOTE,
        authedUser,
        qid,
        answer
    }
}

export const handleSetVote = (info) => {
    return (dispatch) => {
        dispatch(setVoteAction(info))
        return saveQuestionAnswer(info).catch((_e) => {
            dispatch(setVoteAction(info))
            alert('An error occurred. Please try again')
        })
    }
}

export const saveNewQuestion = ({optionOneText, optionTwoText, author}) => {
    return {
        type: SAVE_QUESTION,
        optionOneText,
        optionTwoText,
        author
    }
}

export const handleSaveQuestion = ({optionOneText, optionTwoText, author}) => {
    return (dispatch) => {
        dispatch(saveNewQuestion({optionOneText, optionTwoText, author}))
        return saveQuestion({optionOneText, optionTwoText, author}).catch((_e) => {
            dispatch(saveNewQuestion({optionOneText, optionTwoText, author}))
            alert('An error occurred. Please try again')
        })
    }
}

