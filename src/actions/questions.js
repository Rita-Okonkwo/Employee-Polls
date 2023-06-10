export const GET_QUESTIONS = 'GET_QUESTIONS'

export const getQuestionsAction = (questions) => {
    return {
        type: GET_QUESTIONS,
        questions
    }
}