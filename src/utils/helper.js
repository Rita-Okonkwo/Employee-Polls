import { _getQuestions, _getUsers, _saveQuestion, _saveQuestionAnswer } from "./_DATA"

export const formatDate = (timestamp) => {
    const d = new Date(timestamp)
    const time = d.toLocaleTimeString('en-US')
    return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
  }

  export const getInitialData = () => {
    return Promise.all([
      _getUsers(),
      _getQuestions(),
    ]).then(([users, questions]) => ({
      users,
      questions,
    }))
  }

  export const saveQuestionAnswer = (info) => {
    return _saveQuestionAnswer(info)
  }

  export const saveQuestion = (info) => {
    return _saveQuestion(info)
  }
  