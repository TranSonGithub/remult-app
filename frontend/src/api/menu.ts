import axiosClient from '.';

const menuApi = {
  async create(params: any) {
    console.log(`[menuApi][create] params -> ${JSON.stringify(params, null, 2)}`);

    const url = '/menus';
    return await axiosClient.post(url, params);
  },

  async get(params: any) {
    console.log(`[menuApi][get] params -> ${JSON.stringify(params, null, 2)}`);

    const url = '/menus';
    return await axiosClient.get(url, params);
  },
};

export default menuApi;
