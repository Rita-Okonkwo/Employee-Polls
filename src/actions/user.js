export const GET_USERS = 'GET_USERS'

export const getUsersAction = (users) => {
    return {
        type: GET_USERS,
        users
    }
}