import { combineReducers } from 'redux';

import subjectsReducer from './subjects/subjects.reducer';

export default combineReducers({
    subjects: subjectsReducer
});