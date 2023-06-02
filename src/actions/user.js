import { _getUsers } from "../utils/_DATA"

export const GET_USERS = 'GET_USERS'

const getUsersAction = (users) => {
    return {
        type: GET_USERS,
        users
    }
}

export const getUsers = () => {
    return (dispatch) => {
        return _getUsers().then(({users}) => {
            dispatch(getUsersAction(users))
        })
    }
}