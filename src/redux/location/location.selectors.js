import { createSelector } from 'reselect';
// import memoize from 'lodash.memoize';


const selectLocation = state => state.location;

export const selectSubject = createSelector(
    [selectLocation],
    location => location.subject
);

export const selectCourse = createSelector(
    [selectLocation],
    location => location.course
);

export const selectLesson = createSelector(
    [selectLocation],
    location => location.lesson
);

export const selectSection = createSelector(
    [selectLocation],
    location => location.section
);