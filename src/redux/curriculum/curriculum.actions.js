import CurriculumActionsTypes from "./curriculum.types";


export const fetchCurriculumStart = () => ({
    type: CurriculumActionsTypes.FETCH_CURRICULUM_START
});

export const fetchCurriculumSuccess = curriculumMap => ({
    type: CurriculumActionsTypes.FETCH_CURRICULUM_SUCCESS,
    payload: curriculumMap
});

export const fetchCurriculumFailure = errorMessage => ({
    type: CurriculumActionsTypes.FETCH_CURRICULUM_FAILURE,
    payload: errorMessage
});
