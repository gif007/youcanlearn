import { all, call } from 'redux-saga/effects';

import { subjectsSagas } from './subjects/subjects.sagas';
import { userSagas } from './user/user.sagas';


export default function* rootSaga() {
    yield all([
        call(userSagas),
        call(subjectsSagas)
    ]);
};