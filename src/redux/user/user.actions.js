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

export const checkUserSession = () => ({
    type: userActionTypes.CHECK_USER_SESSION
})

export const signOutStart = () => ({
    type: userActionTypes.SIGN_OUT_START
})

export const signOutSuccess = () => ({
    type: userActionTypes.SIGN_OUT_SUCCESS
})

export const signOutFailure = (errorMessage) => ({
    type: userActionTypes.SIGN_OUT_FAILURE,
    payload: errorMessage
})