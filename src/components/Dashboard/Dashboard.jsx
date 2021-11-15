import React, { useState } from 'react';

import SignInForm from 'components/SignInForm';
import SignUpForm from 'components/SignUpForm';

import s from './Dashboard.scss';

const Dashboard = () => {
  const [loginState, setLoginState] = useState('signin');
  console.log(loginState);
  return (
    <>
      <div className={s.root}>
        {loginState === 'signin' ? (
          <>
            <SignInForm />
            <button
              className={s.button}
              onClick={() => setLoginState('signup')}
            >
              SignUp
            </button>
          </>
        ) : (
          <>
            <SignUpForm />
            <button
              className={s.button}
              onClick={() => setLoginState('signin')}
            >
              SignIn
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default Dashboard;
