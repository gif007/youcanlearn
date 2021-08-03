import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';


const selectSubjects = state => state.subjects;

export const selectSubject = memoize((param) => (
    createSelector(
        [selectSubjects],
        subjects => subjects ? (
            Object.keys(subjects[param]).map(key => subjects[param][key])
        ) : null
    )
));
