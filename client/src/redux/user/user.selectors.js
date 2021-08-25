// import createSelecto method of reselect
import { createSelector } from 'reselect';


// get user from state
const selectUser = state => state.user;


// get current user from user data
export const selectCurrentUser = createSelector(
    [selectUser],
    (user) => user.currentUser
);

// get current user auth token for back-end validation
export const selectUserToken = createSelector(
    [selectUser],
    (user) => user.token
);

// get error message
export const selectErrorMessage = createSelector(
    [selectUser],
    (user) => user.error
);

export const selectIsAuthenticating = createSelector(
    [selectUser],
    (user) => user.isAuthenticating
);

export const selectIsEmailUpdating = createSelector(
    [selectUser],
    (user) => user.updatingEmail
);

export const selectIsEmailChanged = createSelector(
    [selectUser],
    user => user.emailChanged
);

export const selectIsNameUpdating = createSelector(
    [selectUser],
    user => user.updatingName
);

export const selectIsNameChanged = createSelector(
    [selectUser],
    user => user.nameChanged
)