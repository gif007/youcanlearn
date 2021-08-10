import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';


const selectSubjects = state => state.subjects;

export const selectSubjectsData = createSelector(
    [selectSubjects],
    subjects => subjects.data
);

export const selectSubjectsDataAsArray = createSelector(
    [selectSubjectsData],
    data => data ? (
        Object.keys(data).map(key => data[key])
    ) : null
);

export const selectSubject = memoize((subject) => (
    createSelector(
        [selectSubjectsData],
        data => data ? data[subject] : null
    )
));
