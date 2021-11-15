import React, { useState } from 'react';
import cx from 'classnames';
import s from './SignInForm.scss';

import { ErrorMessage, Formik, Form as FormWrapper } from 'formik';

import { actions } from 'models/users/slice';
import useAction from 'hooks/useAction';

const SignInForm = () => {
  const [status, setStatus] = useState('');
  const onSignIn = useAction(actions.signIn);
  const send = async (values, resetForm) => {
    console.log('send');
    console.log(values);
    try {
      setStatus('Pending');
      await onSignIn(values);
      setStatus('Success');
      resetForm();
    } catch (err) {
      setStatus('Failure');
      console.log(err);
    }
  };

  return (
    <Formik
      initialValues={{
        username: '',
        password: '',
      }}
      validate={values => {
        const errors = {};
        const requiredFields = Object.keys(values).reduce((acc, value) => {
          acc.push(value);

          return acc;
        }, []);

        requiredFields.forEach(field => {
          if (!values[field]) {
            errors[field] = 'You didn’t fill the field';
          }
        });

        return errors;
      }}
      onSubmit={(values, { resetForm }) => {
        send(values, resetForm);
      }}
    >
      {({ values, handleSubmit, errors, handleChange, touched }) => (
        <FormWrapper>
          <div className={s.form} onSubmit={handleSubmit}>
            <div className={s.field}>
              <span className={s.label}>Username</span>
              <input
                name="username"
                value={values.username}
                className={cx(s.input, {
                  [s.validation_error]: errors.name && touched.name,
                })}
                placeholder="Username"
                onChange={handleChange}
              />
              <ErrorMessage
                name="username"
                render={error => <span className={s.error}>{error}</span>}
              />
            </div>
            <div className={s.field}>
              <span className={s.label}>Password</span>
              <input
                type="password"
                name="password"
                value={values.password}
                className={cx(s.input, {
                  [s.validation_error]: errors.email && touched.email,
                })}
                onChange={handleChange}
                placeholder="password"
              />
              <ErrorMessage
                name="password"
                render={error => <span className={s.error}>{error}</span>}
              />
            </div>
            <div className={cx(s.formButton, s.right)}>
              <div className={s.status}>{status}</div>
              <button className={s.button} type="submit">
                Submit
              </button>
            </div>
          </div>
        </FormWrapper>
      )}
    </Formik>
  );
};

export default SignInForm;
