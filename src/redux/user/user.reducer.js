// import user action types
import UserActionTypes from './user.types';

// initialize state of currentUser
const INITIAL_STATE = {
    currentUser: null,
    isAuthenticating: false,
    token: null,
    error: null
};

// reducer which responds to actions which set the currentUser in the store
const userReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.EMAIL_SIGN_IN_START:
        case UserActionTypes.GOOGLE_SIGN_IN_START:
        case UserActionTypes.SIGN_UP_START:
            return {
                ...state,
                isAuthenticating: true
            }
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