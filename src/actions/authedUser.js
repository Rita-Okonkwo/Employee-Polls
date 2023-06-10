export const SET_AUTHED_USER = 'SET_AUTHED_USER'
export const LOGOUT_USER = 'LOGOUT_USER'

export const setAuthedUser = (user_id) => {
    return {
        type: SET_AUTHED_USER,
        user_id
    }
}

export const logOutUser = () => {
    return {
        type: LOGOUT_USER
    }
}