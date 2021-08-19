import { combineReducers } from 'redux';

import subjectsReducer from './subjects/subjects.reducer';
import locationReducer from './location/location.reducer';
import dropdownsReducer from './dropdowns/dropdowns.reducer';
import userReducer from './user/user.reducer';

export default combineReducers({
    user: userReducer,
    subjects: subjectsReducer,
    location: locationReducer,
    dropdowns: dropdownsReducer
});