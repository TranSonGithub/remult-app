import axiosClient from '.';

const authApi = {
  async login(params: any) {
    console.log(`[api][login] params -> ${JSON.stringify(params, null, 2)}`);

    const url = '/auth/login';
    return await axiosClient.post(url, params);
  },
};

export default authApi;
