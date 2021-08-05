import LocationActionsTypes from "./location.types";

const INITIAL_STATE = {
    subject: null,
    course: null,
    lesson: null
};

const locationReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LocationActionsTypes.UPDATE_SUBJECT:
            return {
                ...state,
                subject: action.payload
            };
        case LocationActionsTypes.UPDATE_COURSE:
            return {
                ...state,
                course: action.payload
            };
        case LocationActionsTypes.UPDATE_LESSON:
            return {
                ...state,
                lesson: action.payload
            };
        default:
            return state;
    }
}

export default locationReducer;