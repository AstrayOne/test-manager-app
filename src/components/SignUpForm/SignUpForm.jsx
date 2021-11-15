import React, { useState } from 'react';
import cx from 'classnames';
import s from './SignUpForm.scss';

import { ErrorMessage, Formik, Form as FormWrapper } from 'formik';

import { actions } from 'models/users/slice';
import useAction from 'hooks/useAction';

const SignUpForm = () => {
  const [status, setStatus] = useState('');
  const onSignUp = useAction(actions.signUp);
  const send = async (values, resetForm) => {
    console.log('send');
    console.log(values);
    onSignUp(values);
    try {
      setStatus('Pending');
      await onSignUp(values);
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
        password_confirmation: '',
        is_admin: false,
      }}
      validate={values => {
        const errors = {};
        const requiredFields = Object.keys(values).reduce((acc, value) => {
          console.log(acc, value);
          if (value !== 'is_admin') {
            acc.push(value);
          }

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
                  [s.validation_error]: errors.password && touched.password,
                })}
                onChange={handleChange}
                placeholder="password"
              />
              <ErrorMessage
                name="password"
                render={error => <span className={s.error}>{error}</span>}
              />
            </div>
            <div className={s.field}>
              <span className={s.label}>Password Confirmation</span>
              <input
                type="password"
                name="password_confirmation"
                value={values.password_confirmation}
                className={cx(s.input, {
                  [s.validation_error]:
                    errors.password_confirmation &&
                    touched.password_confirmation,
                })}
                onChange={handleChange}
                placeholder="Password confirmation"
              />
              <ErrorMessage
                name="password_confirmation"
                render={error => <span className={s.error}>{error}</span>}
              />
            </div>
            <div className={s.field}>
              <div className={s.checkBoxWrapper}>
                <input
                  type="checkbox"
                  name="is_admin"
                  value={values.is_admin}
                  className={cx(s.checkbox, {
                    [s.validation_error]: errors.is_admin && touched.is_admin,
                  })}
                  onChange={handleChange}
                />
                <span className={s.label}>Is admin?</span>
              </div>
              <ErrorMessage
                name="is_admin"
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

export default SignUpForm;
