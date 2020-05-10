import {userActionTypes} from './user.types';

export const googleSignInStart = () => ({
    type: userActionTypes.GOOGLE_SIGN_IN_START
})

export const googleSignInSuccess = (user) => ({
    type: userActionTypes.GOOGLE_SIGN_IN_SUCCESS,
    payload: user
})

export const googleSignInFailure = (errMessage) => ({
    type: userActionTypes.GOOGLE_SIGN_IN_FAILURE,
    payload: errMessage
})

export const emailSignInStart = (emailAndPassword) => ({
    type: userActionTypes.EMAIL_SIGN_IN_START,
    payload: emailAndPassword
})

export const emailSignInSuccess = (user) => ({
    type: userActionTypes.EMAIL_SIGN_IN_SUCCESS,
    payload: user
})

export const emailSignInFailure = (errMessage) => ({
    type: userActionTypes.EMAIL_SIGN_IN_FAILURE,
    payload: errMessage
})