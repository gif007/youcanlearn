import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';


const selectSubjects = state => state.subjects;

export const selectSubjectsData = createSelector(
    [selectSubjects],
    subjects => subjects.data
);

export const selectSubject = memoize((param) => (
    createSelector(
        [selectSubjectsData],
        data => data ? (
            Object.keys(data[param]).map(key => data[param][key])
        ) : null
    )
));
