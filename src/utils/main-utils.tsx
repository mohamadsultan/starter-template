export const isLoggedIn = () => {
  return !!localStorage.getItem('accessToken');
};
export const getToken = () => {
  return localStorage.getItem('accessToken');
};
export const getRefreshToken = () => {
  return localStorage.getItem('refreshToken');
};
export const storeLoginResponse = (loginResponse: { token: string; refreshToken: string }) => {
  localStorage.setItem('accessToken', loginResponse.token);
  localStorage.setItem('refreshToken', loginResponse.refreshToken);
};

export const clearToken = () => {
  localStorage.removeItem('accessToken');
};
export const storeToken = (token: string) => {
  localStorage.setItem('accessToken', token);
};
