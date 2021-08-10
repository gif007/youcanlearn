import { all, call } from 'redux-saga/effects';

import { subjectsSagas } from './subjects/subjects.sagas';


export default function* rootSaga() {
    yield all([
        call(subjectsSagas)
    ]);
};