import { takeLatest, all, put, call } from 'redux-saga/effects';

import * as api from 'api';

import { actions } from './slice';

export function* fetchCurrentUser() {
  try {
    const response = yield call(api.fetchCurrentUser);
    console.log('current', response);
    yield put({
      type: actions.fetchCurrentUserSuccess,
      payload: response.data,
    });
  } catch (err) {
    yield put({
      type: actions.fetchCurrentUserFail,
    });
    console.error(err);
  }
}

export function* signInSaga({ payload }) {
  console.log(payload);
  try {
    const response = yield call(api.signIn, payload);
    console.log('signin', response);
    yield put({
      type: actions.signInSuccess,
      payload: response.data,
    });
  } catch (err) {
    console.error(err);
  }
}

export function* signUpSaga({ payload }) {
  console.log(payload);
  try {
    console.log('try');
    const response = yield call(api.signUp, payload);
    console.log('signup', response);
    yield put({
      type: actions.signUpSuccess,
    });
  } catch (err) {
    console.error(err);
  }
}

export function* fetchTestList() {
  try {
    const response = yield call(api.fetchTestList);
    console.log('tests', response);
    yield put({
      type: actions.fetchTestListSuccess,
      payload: response.data,
    });
  } catch (err) {
    console.error(err);
  }
}

export function* logout() {
  try {
    const response = yield call(api.logout);
    console.log('logout', response);
    yield put({
      type: actions.logoutSuccess,
    });
  } catch (err) {
    console.error(err);
  }
}

export default function*() {
  yield all([takeLatest(actions.signIn, signInSaga)]);
  yield all([takeLatest(actions.signUp, signUpSaga)]);
  yield all([takeLatest(actions.fetchCurrentUser, fetchCurrentUser)]);
  yield all([takeLatest(actions.fetchTestList, fetchTestList)]);
  yield all([takeLatest(actions.logout, logout)]);
}
