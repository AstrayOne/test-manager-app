import { createSelector } from 'reselect';

import { denormalize } from 'utils/normalizeById';

export const usersSelector = createSelector(
  state => state,
  state => state.users
);

export const isFetchingSelector = createSelector(
  usersSelector,
  ({ fetching }) => fetching
);

export const currentUserSelector = createSelector(
  usersSelector,
  ({ currentUser }) => currentUser
);

export const testListSelector = createSelector(
  usersSelector,
  ({ testList }) => testList
);

export const isFetchingTestListSelector = createSelector(
  usersSelector,
  ({ fetchingTestList }) => fetchingTestList
);
