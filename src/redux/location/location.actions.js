import LocationActionsTypes from "./location.types";


export const updateSubject = (subject) => ({
    type: LocationActionsTypes.UPDATE_SUBJECT,
    payload: subject
});

export const updateCourse = (course) => ({
    type: LocationActionsTypes.UPDATE_COURSE,
    payload: course
});

export const updateLesson = (lesson) => ({
    type: LocationActionsTypes.UPDATE_LESSON,
    payload: lesson
});

export const updateSection = (section) => ({
    type: LocationActionsTypes.UPDATE_SECTION,
    payload: section
});