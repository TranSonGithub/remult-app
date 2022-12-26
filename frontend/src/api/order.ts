import axiosClient from '.';

const orderApi = {
  async create(params: any) {
    console.log(`[orderApi][create] params -> ${JSON.stringify(params, null, 2)}`);

    const url = '/orders';
    return await axiosClient.post(url, params);
  },

  async get(params: any) {
    console.log(`[orderApi][get] params -> ${JSON.stringify(params, null, 2)}`);

    const url = `/orders?phoneNumber=${params.phoneNumber}`;
    return await axiosClient.get(url);
  },
};

export default orderApi;
