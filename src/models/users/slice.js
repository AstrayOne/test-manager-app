/* eslint-disable no-param-reassign */

import { createSlice } from 'redux-starter-kit';

import actionTypes from 'utils/actionTypes';

import { normalize } from 'utils/normalizeById';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    fetching: true,
    currentUser: {},
    fetchingCurrentUser: true,
    testList: {},
    fetchingTestList: true,
  },
  reducers: {
    fetchCurrentUser: state => {
      state.fetching = true;
    },
    fetchCurrentUserSuccess(state, { payload }) {
      state.fetching = false;
      state.currentUser = payload;
    },
    fetchCurrentUserFail(state, { payload }) {
      state.fetching = false;
    },
    signIn: state => {
      state.fetching = true;
    },
    signInSuccess(state, { payload }) {
      state.fetching = false;
      state.currentUser = payload;
    },
    signUp: state => {
      state.fetching = true;
    },
    signUpSuccess: state => {
      state.fetching = false;
    },
    fetchTestList: state => {
      state.fetchingTestList = true;
    },
    fetchTestListSuccess(state, { payload }) {
      state.fetchingTestList = false;
      state.testList = payload;
    },
    logout: state => {
      state.fetching = true;
    },
    logoutSuccess: state => {
      state.fetching = false;
      state.currentUser = {};
    },
  },
});

export const actions = actionTypes(usersSlice.actions);

export default usersSlice.reducer;
