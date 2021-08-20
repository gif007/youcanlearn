import { all, call } from 'redux-saga/effects';

import { curriculumSagas } from './curriculum/curriculum.sagas'
import { userSagas } from './user/user.sagas';


export default function* rootSaga() {
    yield all([
        call(userSagas),
        call(curriculumSagas)
    ]);
};