import { saveQuestionAnswer } from "../utils/helper"

export const GET_QUESTIONS = 'GET_QUESTIONS'
export const SET_VOTE = 'SET_VOTE'

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
            alert('An error occured. Please try again')
        })
    }
}

