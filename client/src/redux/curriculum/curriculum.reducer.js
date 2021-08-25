import CurriculumActionsTypes from "./curriculum.types";

const INITIAL_STATE = {
    subjects: null,
    courses: null,
    sections: null,
    lessons: null,
    isFetching: false,
    error: undefined
};

const curriculumReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CurriculumActionsTypes.FETCH_CURRICULUM_START:
            return {
                ...state,
                isFetching: true
            }
        case CurriculumActionsTypes.FETCH_CURRICULUM_SUCCESS:
            return {
                ...state,
                isFetching: false,
                subjects: action.payload.subjects,
                courses: action.payload.courses,
                sections: action.payload.sections,
                lessons: action.payload.lessons
            };
        case CurriculumActionsTypes.FETCH_CURRICULUM_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default curriculumReducer;