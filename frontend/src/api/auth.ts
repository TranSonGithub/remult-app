import axiosClient from '.';

const authApi = {
  login(params: any) {
    // const url = `/${urls.USERS}/login`;
    const url = '/auth/login';
    return axiosClient.get(url, params);
  },
};

export default authApi;
