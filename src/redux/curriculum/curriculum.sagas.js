import { takeLatest, call, put, all } from 'redux-saga/effects';

import {
    firestore,
    convertLessonsSnapshotToMap,
    convertSectionsSnapshotToMap,
    convertSubjectsSnapshotToMap,
    convertCoursesSnapshotToMap
} from '../../firebase/firebase.utils';

import CurriculumActionsTypes from './curriculum.types';

import { fetchCurriculumSuccess, fetchCurriculumFailure } from './curriculum.actions';

export function* fetchCollectionsAsync() {
    try {
        // get subjects
        const subjectsRef = yield firestore.collection('subjects');
        const subjectsSnapshot = yield subjectsRef.get();
        const subjectsMap = yield call(convertSubjectsSnapshotToMap, subjectsSnapshot);
        // get courses
        const coursesRef = yield firestore.collection('courses');
        const coursesSnapshot = yield coursesRef.get();
        const coursesMap = yield call(convertCoursesSnapshotToMap, coursesSnapshot);
        // get sections
        const sectionsRef = yield firestore.collection('sections');
        const sectionsSnapshot = yield sectionsRef.get();
        const sectionsMap = yield call(convertSectionsSnapshotToMap, sectionsSnapshot);
        // get lessons
        const lessonsRef = yield firestore.collection('lessons');
        const lessonsSnapshot = yield lessonsRef.get();
        const lessonsMap = yield call(convertLessonsSnapshotToMap, lessonsSnapshot);
        yield put(fetchCurriculumSuccess({
            subjects: subjectsMap,
            sections: sectionsMap,
            lessons: lessonsMap,
            courses: coursesMap
        }));
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