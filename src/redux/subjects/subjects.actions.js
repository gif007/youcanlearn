import SubjectActionsTypes from "./subjects.types";


export const fetchSubjectStart = () => ({
    type: SubjectActionsTypes.FETCH_SUBJECTS_START
});

export const fetchSubjectsSuccess = subjectsMap => ({
    type: SubjectActionsTypes.FETCH_SUBJECTS_SUCCESS,
    payload: subjectsMap
});

export const fetchSubjectsFailure = errorMessage => ({
    type: SubjectActionsTypes.FETCH_SUBJECTS_FAILURE,
    payload: errorMessage
});
