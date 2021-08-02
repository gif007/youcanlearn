import { combineReducers } from 'redux';

import someReducer from './some.reducer';

export default combineReducers({
    some: someReducer
});