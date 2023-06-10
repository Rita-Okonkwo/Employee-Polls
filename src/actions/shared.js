import { getInitialData } from "../utils/helper"
import { getQuestionsAction } from "./questions"
import { getUsersAction } from "./user"

export const handleInitialData = () => {
    return (dispatch) => {
        return getInitialData().then(({users, questions}) => {
            dispatch(getUsersAction(users))
            dispatch(getQuestionsAction(questions))
        }
        )
    }
}