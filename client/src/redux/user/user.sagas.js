import { takeLatest, put, all, call } from 'redux-saga/effects';

import UserActionTypes from './user.types';

import { firestore, auth, googleProvider, createUserProfileDocument, getCurrentUser } from '../../firebase/firebase.utils';

import {
    signInSuccess,
    signInFailure,
    signOutSuccess,
    signOutFailure,
    signUpFailure,
    signUpSuccess,
    updateUserEmailSuccess,
    updateUserEmailFailure,
    updateUserNameSuccess,
    updateUserNameFailure,
    updatePointsSuccess,
    updatePointsFailure
} from './user.actions';


export function* getSnapshotFromUserAuth(userAuth, additionalData) {
    try {
        const token = yield auth.currentUser.getIdToken();
        const userRef = yield call(createUserProfileDocument, userAuth, additionalData);
        const userSnapshot = yield userRef.get();
        const pointsRef = yield firestore.doc('/points/' + userSnapshot.id);
        const pointsSnapshot = yield pointsRef.get();
        const points = pointsSnapshot.get('points');
        yield put(signInSuccess({ user: {id: userSnapshot.id, ...userSnapshot.data()}, token, points }));
    } catch (error) {
        yield put(signInFailure(error));
    }
}

export function* signUp({ payload: { fname, lname, email, password } }) {
    try {
        const { user } = yield auth.createUserWithEmailAndPassword(email, password);
        yield put(signUpSuccess({user, additionalData: { fname, lname }}));
    } catch(error) {
        yield put(signUpFailure(error));
    }
};

export function* signInAfterSignUp({ payload: {user, additionalData} }) {
    yield getSnapshotFromUserAuth(user, additionalData);
};

export function* signOut() {
    try {
        yield auth.signOut();
        yield put(signOutSuccess());
    } catch(error) {
        yield put(signOutFailure(error));
    }
};

export function* signInWithGoogle() {
    try {
        const { user } = yield auth.signInWithPopup(googleProvider);
        yield getSnapshotFromUserAuth(user);
    } catch (error) {
        yield put(signInFailure(error));
    }
};

export function* signInWithEmail({ payload: { email, password }}) {
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapshotFromUserAuth(user);
    } catch(error) {
        yield put(signInFailure(error));
    }
};

export function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUser();
        if (!userAuth) return;
        yield getSnapshotFromUserAuth(userAuth);
    } catch(error) {
        yield put(signInFailure(error))
    }
};

export function* updateUserEmail({payload: { oldEmail, newEmail, password }}) {
    try {
        const { user } = yield auth.signInWithEmailAndPassword(oldEmail, password);
        yield user.updateEmail(newEmail);
        const userRef = firestore.doc(`users/${user.uid}`);
        yield userRef.update({email: newEmail});
        const userSnapshot = yield userRef.get();
        yield put(updateUserEmailSuccess({id: userSnapshot.id, ...userSnapshot.data()}));
    } catch(error) {
        yield put(updateUserEmailFailure(error));
    }
}

export function* updateUserName({payload: { fname, lname }}) {
    try {
        const userAuth = yield getCurrentUser();
        const userRef = firestore.doc(`users/${userAuth.uid}`);
        yield userRef.update({fname, lname});
        const userSnapshot = yield userRef.get();
        yield put(updateUserNameSuccess({id: userSnapshot.id, ...userSnapshot.data()}));
    } catch (error) {
        yield put(updateUserNameFailure(error));
    }
}

export function* updatePoints( props ) {
    try {
        const pointsRef = yield firestore.doc('/points/' + props.payload);
        const pointsSnapshot = yield pointsRef.get();
        const points = pointsSnapshot.get('points');
        yield put(updatePointsSuccess(points));
    } catch (error) {
        yield put(updatePointsFailure(error));
    }
}

export function* onGoogleSignInStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
};

export function* onEmailSignInStart() {
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
};

export function* onCheckUserSession() {
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
};

export function* onSignOutStart() {
    yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
}

export function* onSignUpStart() {
    yield takeLatest(UserActionTypes.SIGN_UP_START, signUp);
};

export function* onSignUpSuccess() {
    yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp);
};

export function* onUpdateEmailStart() {
    yield takeLatest(UserActionTypes.UPDATE_USER_EMAIL_START, updateUserEmail);
};

export function* onUpdateNameStart() {
    yield takeLatest(UserActionTypes.UPDATE_USER_NAME_START, updateUserName);
};

export function* onUpdatePoints() {
    yield takeLatest(UserActionTypes.UPDATE_POINTS, updatePoints);
}

export function* userSagas() {
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onCheckUserSession),
        call(onSignOutStart),
        call(onSignUpStart),
        call(onSignUpSuccess),
        call(onUpdateEmailStart),
        call(onUpdateNameStart),
        call(onUpdatePoints)
    ]);
}