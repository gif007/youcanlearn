// import user action types
import UserActionTypes from './user.types';

// initialize state of currentUser
const INITIAL_STATE = {
    currentUser: null,
    token: null,
    error: null
};

// reducer which responds to actions which set the currentUser in the store
const userReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload.user,
                token: action.payload.token,
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
                error: action.payload
            };
        default:
            return state;
    }
};

export default userReducer;