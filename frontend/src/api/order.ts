import axiosClient from '.';

const orderApi = {
  async create(params: any) {
    console.log(`[orderApi][create] params -> ${JSON.stringify(params, null, 2)}`);

    const url = '/orders';
    return await axiosClient.post(url, params);
  },

  async get(params: any) {
    console.log(`[orderApi][get] params -> ${JSON.stringify(params, null, 2)}`);
    const query = params.type ? `type=all` : `phoneNumber=${params.phoneNumber}`;

    const url = `/orders?${query}`;
    return await axiosClient.get(url);
  },

  async update(params: any) {
    console.log(`[orderApi][get] params -> ${JSON.stringify(params, null, 2)}`);

    const url = `/orders/${params._id}`;
    return await axiosClient.put(url, params.body);
  },
};

export default orderApi;
