import React from 'react';

import { actions } from 'models/users/slice';
import useAction from 'hooks/useAction';
import useSelector from 'hooks/useSelector';
import useComponentDidMount from 'hooks/useComponentDidMount';

import {
  // collectionSelector,
  // isFetchingSelector,
  // isCollectionFetchedSelector,
  currentUserSelector,
} from 'models/users/selectors';

// import Users from './Users';

const UsersContainer = () => {
  // const onFetchUsers = useAction(actions.fetchUsers);
  const onFetchAuth = useAction(actions.fetchAuth);
  const onFetchCurrentUser = useAction(actions.fetchCurrentUser);
  // const users = useSelector(collectionSelector);
  // const fetching = useSelector(isFetchingSelector);
  // const collectionFetched = useSelector(isCollectionFetchedSelector);
  const currentUser = useSelector(currentUserSelector);
  console.log(currentUser);
  useComponentDidMount(() => {
    // if (!collectionFetched) {
    //   onFetchUsers();
    //   onFetchCurrentUser();
    // }
    onFetchAuth();
    onFetchCurrentUser();
  });

  return <div>{currentUser.id}</div>;
  // return <Users list={users} fetching={fetching} />;
};

export default UsersContainer;
