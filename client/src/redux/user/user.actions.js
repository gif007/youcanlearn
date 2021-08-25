// get user action types
import UserActionTypes from './user.types';

export const googleSignInStart = () => ({
    type: UserActionTypes.GOOGLE_SIGN_IN_START
});

export const emailSignInStart = (emailAndPassword) => ({
    type: UserActionTypes.EMAIL_SIGN_IN_START,
    payload: emailAndPassword
});

export const signInSuccess = (user) => ({
    type: UserActionTypes.SIGN_IN_SUCCESS,
    payload: user
});

export const signInFailure = (error) => ({
    type: UserActionTypes.SIGN_IN_FAILURE,
    payload: error.message
});

export const checkUserSession = () => ({
    type: UserActionTypes.CHECK_USER_SESSION
});

export const signOutStart = () => ({
    type: UserActionTypes.SIGN_OUT_START
});

export const signOutSuccess = () => ({
    type: UserActionTypes.SIGN_OUT_SUCCESS
});

export const signOutFailure = (error) => ({
    type: UserActionTypes.SIGN_OUT_FAILURE,
    payload: error.message
});

export const signUpStart = (userDetails) => ({
    type: UserActionTypes.SIGN_UP_START,
    payload: userDetails
});

export const signUpSuccess = ({ user, additionalData }) => ({
    type: UserActionTypes.SIGN_UP_SUCCESS,
    payload: { user, additionalData }
});

export const signUpFailure = (error) => ({
    type: UserActionTypes.SIGN_UP_FAILURE,
    payload: error.message
});

export const updateUserEmailStart = (userDetails) => ({
    type: UserActionTypes.UPDATE_USER_EMAIL_START,
    payload: userDetails
});

export const updateUserEmailSuccess = (user) => ({
    type: UserActionTypes.UPDATE_USER_EMAIL_SUCCESS,
    payload: user
});

export const updateUserEmailFailure = (error) => ({
    type: UserActionTypes.UPDATE_USER_EMAIL_FAILURE,
    payload: error.message
});

export const resetEmailChangedToFalse = () => ({
    type: UserActionTypes.RESET_EMAIL_CHANGED_TO_FALSE
});

export const updateUserNameStart = (name) => ({
    type: UserActionTypes.UPDATE_USER_NAME_START,
    payload: name
});

export const updateUserNameSuccess = (name) => ({
    type: UserActionTypes.UPDATE_USER_NAME_SUCCESS,
    payload: name
});

export const updateUserNameFailure = (error) => ({
    type: UserActionTypes.UPDATE_USER_NAME_FAILURE,
    payload: error.message
});

export const resetNameChangedToFalse = () => ({
    type: UserActionTypes.RESET_NAME_CHANGED_TO_FALSE
});
