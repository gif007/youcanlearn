import { takeLatest, call, put, all } from 'redux-saga/effects';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

import CurriculumActionsTypes from './curriculum.types';

import { fetchCurriculumSuccess, fetchCurriculumFailure } from './curriculum.actions';

export function* fetchCollectionsAsync() {
    try {
        const collectionRef = yield firestore.collection('curriculum');
        const snapshot = yield collectionRef.get();
        const subjectsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
        yield put(fetchCurriculumSuccess(subjectsMap));
    } catch (error) {
        yield put(fetchCurriculumFailure(error.message));
    }

};

export function* fetchCurriculumStart() {
    yield takeLatest(
        CurriculumActionsTypes.FETCH_CURRICULUM_START,
        fetchCollectionsAsync
    );
};

export function* curriculumSagas() {
    yield all([
        call(fetchCurriculumStart)
    ]);
};