import { takeLatest, call, put, all } from 'redux-saga/effects';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

import SubjectActionsTypes from './subjects.types';

import { fetchSubjectsSuccess, fetchSubjectsFailure } from './subjects.actions';

export function* fetchCollectionsAsync() {
    try {
        const collectionRef = yield firestore.collection('subjectsOld');
        const snapshot = yield collectionRef.get();
        const subjectsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
        yield put(fetchSubjectsSuccess(subjectsMap));
    } catch (error) {
        yield put(fetchSubjectsFailure(error.message));
    }

};

export function* fetchSubjectsStart() {
    yield takeLatest(
        SubjectActionsTypes.FETCH_SUBJECTS_START,
        fetchCollectionsAsync
    );
};

export function* subjectsSagas() {
    yield all([
        call(fetchSubjectsStart)
    ]);
};