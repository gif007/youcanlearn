import SubjectActionsTypes from "./subjects.types";

const INITIAL_STATE = {
    data: null,
    isFetching: false,
    error: undefined
};

const subjectsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SubjectActionsTypes.FETCH_SUBJECTS_START:
            return {
                ...state,
                isFetching: true
            }
        case SubjectActionsTypes.FETCH_SUBJECTS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.payload
            };
        case SubjectActionsTypes.FETCH_SUBJECTS_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default subjectsReducer;