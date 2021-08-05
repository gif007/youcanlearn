import { combineReducers } from 'redux';

import subjectsReducer from './subjects/subjects.reducer';
import locationReducer from './location/location.reducer';
import dropdownsReducer from './dropdowns/dropdowns.reducer';

export default combineReducers({
    subjects: subjectsReducer,
    location: locationReducer,
    dropdowns: dropdownsReducer
});