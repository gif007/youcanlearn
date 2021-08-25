// import user action types
import UserActionTypes from './user.types';

// initialize state of currentUser
const INITIAL_STATE = {
    currentUser: null,
    isAuthenticating: false,
    updatingEmail: false,
    updatingName: false,
    emailChanged: false,
    nameChanged: false,
    token: null,
    error: null
};

// reducer which responds to actions which set the currentUser in the store
const userReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.UPDATE_USER_NAME_START:
            return {
                ...state,
                updatingName: true
            }
        case UserActionTypes.UPDATE_USER_NAME_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                updatingName: false,
                nameChanged: true
            };
        case UserActionTypes.UPDATE_USER_NAME_FAILURE:
            return {
                ...state,
                updatingName: false,
                error: action.payload
            };
        case UserActionTypes.RESET_NAME_CHANGED_TO_FALSE:
            return {
                ...state,
                nameChanged: false
            };
        case UserActionTypes.UPDATE_USER_EMAIL_START:
            return {
                ...state,
                updatingEmail: true
            };
        case UserActionTypes.UPDATE_USER_EMAIL_SUCCESS:
            return {
                ...state,
                updatingEmail: false,
                currentUser: action.payload,
                emailChanged: true
            };
        case UserActionTypes.RESET_EMAIL_CHANGED_TO_FALSE:
            return {
                ...state,
                emailChanged: false
            }
        case UserActionTypes.UPDATE_USER_EMAIL_FAILURE:
            return {
                ...state,
                updatingEmail: false,
                error: action.payload
            };
        case UserActionTypes.EMAIL_SIGN_IN_START:
        case UserActionTypes.GOOGLE_SIGN_IN_START:
        case UserActionTypes.SIGN_UP_START:
            return {
                ...state,
                isAuthenticating: true
            };
        case UserActionTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload.user,
                token: action.payload.token,
                isAuthenticating: false,
                error: null
            };
        case UserActionTypes.SIGN_OUT_SUCCESS:
            return {
                ...state,
                currentUser: null,
                token: null,
                error: null
            }
        case UserActionTypes.SIGN_IN_FAILURE:
        case UserActionTypes.SIGN_OUT_FAILURE:
        case UserActionTypes.SIGN_UP_FAILURE:
            return {
                ...state,
                error: action.payload,
                isAuthenticating: false
            };
        default:
            return state;
    }
};

export default userReducer;