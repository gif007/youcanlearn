// import createSelecto method of reselect
import { createSelector } from 'reselect';


// get user from state
const selectUser = state => state.user;


// get current user from user data
export const selectCurrentUser = createSelector(
    [selectUser],
    (user) => user.currentUser
);

// get error message
export const selectErrorMessage = createSelector(
    [selectUser],
    (user) => user.error
);
