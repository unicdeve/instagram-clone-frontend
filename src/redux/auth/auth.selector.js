import { createSelector } from 'reselect';

export const selectAuth = state => state.auth;

export const selectIsAuthenticated = createSelector(
  [selectAuth],
  auth => auth.isAuthenticated
);

export const selectCurrentUser = createSelector(
  [selectAuth],
  auth => auth.currentUser
);

export const selectCurrentUserProfile = createSelector(
  [selectAuth],
  auth => auth.currentUserProfile
);
