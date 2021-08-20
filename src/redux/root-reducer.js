import { combineReducers } from 'redux';

import curriculumReducer from './curriculum/curriculum.reducer';
import dropdownsReducer from './dropdowns/dropdowns.reducer';
import userReducer from './user/user.reducer';

export default combineReducers({
    user: userReducer,
    curriculum: curriculumReducer,
    dropdowns: dropdownsReducer
});