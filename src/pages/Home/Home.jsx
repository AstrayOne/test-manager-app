import React, { useState, useEffect, Fragment } from 'react';
// import React, { Fragment } from 'react';
// import Users from './Users';
import SignInForm from 'components/SignInForm';
import SignUpForm from 'components/SignUpForm';

import s from './Home.scss';
import { signIn } from '../../api/users';

import { actions } from 'models/users/slice';
import useAction from 'hooks/useAction';
import useSelector from 'hooks/useSelector';
import useComponentDidMount from 'hooks/useComponentDidMount';

import MainWindow from 'components/MainWindow';
import Dashboard from 'components/Dashboard';
import Loader from 'components/Loader';

import {
  // collectionSelector,
  isFetchingSelector,
  // isCollectionFetchedSelector,
  currentUserSelector,
  // testListSelector,
} from 'models/users/selectors';
// import { isEmpty } from 'lodash-es';
// import { currentUserSelector } from '../../models/users/selectors';

const Home = () => {
  // const onSignIn = useAction(actions.signIn);

  // const onFetchTests = useAction(actions.fetchTestList);
  const onFetchCurrentUser = useAction(actions.fetchCurrentUser);
  // const onLogout = useAction(actions.logout);

  // onFetchTests();

  // const tests = useSelector(testListSelector);

  // console.log('teststests', tests.tests);
  // onSignIn({ username: 'Dmitry_admin', password: '123456' });
  // onFetchTests();
  // onFetchCurrentUser();
  const isFetching = useSelector(isFetchingSelector);
  // onFetchTests();

  // onFetchCurrentUser();

  const currentUser = useSelector(currentUserSelector);
  console.log('currentUser', currentUser);

  // useEffect(() => {
  //   // Мы не хотим получать сообщение, когда пользователь набирает текст
  //   // Пропускаем эффект, когда isTyping имеет значение true
  //   // onSignIn({ username: 'Dmitry_admin', password: '123456' });
  //   onFetchCurrentUser();
  //   // setTimeout(() => {
  //   //   onFetchCurrentUser();
  //   //   // onFetchTests();
  //   //   // onLogout();
  //   // }, 3000);
  //   // onFetchCurrentUser();
  //   // onFetchTests();
  // }, []);
  // onFetchTests();
  // useComponentDidMount(() => {
  //   onFetchCurrentUser
  // });
  useComponentDidMount(() => {
    // if (!collectionFetched) {
    //   onFetchUsers();
    //   onFetchCurrentUser();
    // }
    // onFetchAuth();
    // onSignIn({ username: 'Dmitry_admin', password: '123456' });
    // onFetchCurrentUser();
    // onFetchTests();
    // onFetchCurrentUser();
    onFetchCurrentUser();

    // onFetchTests();
    // onFetchCurrentUser();
    // setTimeout(() => {
    //   onFetchCurrentUser();
    //   onFetchTests();
    //   // onLogout();
    // }, 3000);

    // onFetchCurrentUser();
  });

  // const lul = [{ title: 'kek' }, { title: 'lul' }];

  return (
    <div className={s.root}>
      {/* <div>lul</div> */}
      {isFetching ? (
        <Loader />
      ) : (
        <>
          {Object.keys(currentUser).length === 0 ? (
            <Dashboard />
          ) : (
            <MainWindow />
          )}
        </>
      )}
    </div>
  );
  // const [loginState, setLoginState] = useState('signin');
  // console.log(loginState);
  // return (
  //   <>
  //     {/* <Users /> */}
  //     <div className={s.root}>
  //       {loginState === 'signin' ? (
  //         <>
  //           <SignInForm />
  //           {/* <div>lul</div> */}
  //           <button
  //             className={s.button}
  //             onClick={() => setLoginState('signup')}
  //           >
  //             signUp
  //           </button>
  //         </>
  //       ) : (
  //         <>
  //           <SignUpForm />
  //           <button
  //             className={s.button}
  //             onClick={() => setLoginState('signin')}
  //           >
  //             signIn
  //           </button>
  //         </>
  //       )}
  //       {/* <SignUpForm /> */}
  //     </div>
  //   </>
  // );
};

export default Home;
