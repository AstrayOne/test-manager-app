import React from 'react';
import s from './MainWindow.scss';

import { actions } from 'models/users/slice';
import useAction from 'hooks/useAction';
import useComponentDidMount from 'hooks/useComponentDidMount';
import useSelector from 'hooks/useSelector';

import {
  testListSelector,
  isFetchingTestListSelector,
} from 'models/users/selectors';

import TestCard from './TestCard';
import Loader from 'components/Loader';

const MainWindow = () => {
  const onFetchTests = useAction(actions.fetchTestList);
  const onLogout = useAction(actions.logout);
  const isFetching = useSelector(isFetchingTestListSelector);
  const testList = useSelector(testListSelector);

  useComponentDidMount(() => {
    onFetchTests();
  });

  return (
    <div className={s.root}>
      {isFetching ? (
        <Loader />
      ) : (
        <>
          <div className={s.header}>
            <div className={s.logout} onClick={onLogout}>
              Logout
            </div>
          </div>
          <div className={s.testList}>
            {testList.tests.map(test => {
              return <TestCard test={test} />;
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default MainWindow;
