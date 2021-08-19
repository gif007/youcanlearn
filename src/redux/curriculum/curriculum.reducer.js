import ALL_SUBJECTS from "./subjects.data";
import ALL_COURSES from './courses.data';
import ALL_LESSONS from "./lessons.data";
import ALL_SECTIONS from './sections.data';

import CurriculumActionsTypes from "./curriculum.types";

const INITIAL_STATE = {
    subjects: ALL_SUBJECTS,
    courses: ALL_COURSES,
    sections: ALL_SECTIONS,
    lessons: ALL_LESSONS,
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
                data: action.payload
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