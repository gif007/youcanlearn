import { combineReducers } from 'redux';

import curriculumReducer from './curriculum/curriculum.reducer';
import locationReducer from './location/location.reducer';
import dropdownsReducer from './dropdowns/dropdowns.reducer';
import userReducer from './user/user.reducer';

export default combineReducers({
    user: userReducer,
    curriculum: curriculumReducer,
    location: locationReducer,
    dropdowns: dropdownsReducer
});