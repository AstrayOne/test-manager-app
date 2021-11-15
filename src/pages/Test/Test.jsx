import React from 'react';

import { useParams } from 'react-router-dom';

import { actions } from 'models/users/slice';
import useAction from 'hooks/useAction';
import useComponentDidMount from 'hooks/useComponentDidMount';

import useSelector from 'hooks/useSelector';

import {
  testListSelector,
  isFetchingTestListSelector,
} from 'models/users/selectors';

import s from './Test.scss';

import TestDetails from 'components/TestDetails';

import Loader from 'components/Loader';

const Test = () => {
  const onFetchTests = useAction(actions.fetchTestList);
  const isFetching = useSelector(isFetchingTestListSelector);

  const { id } = useParams();

  const testList = useSelector(testListSelector);

  let data = {};

  if (Object.keys(testList).length !== 0) {
    data = testList.tests.filter(el => el.id == id)[0];
  }

  useComponentDidMount(() => {
    onFetchTests();
  });

  return (
    <div className={s.root}>
      {isFetching ? <Loader /> : <TestDetails data={data} />}
    </div>
  );
};

export default Test;
