import Req from './request';

export const fetchCurrentUser = () =>
  Req.GET({
    url: `users/current`,
  });

export const signIn = data =>
  Req.POST({
    url: `signin`,
    params: data,
  });

export const signUp = data =>
  Req.POST({
    url: `signup`,
    params: data,
  });

export const fetchTestList = () =>
  Req.GET({
    url: `tests`,
  });

export const logout = () =>
  Req.DELETE({
    url: `logout`,
  });
