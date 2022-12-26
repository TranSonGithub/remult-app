import axios from 'axios';
import axiosClient from '.';

const fileApi = {
  async upload(params: FormData) {
    console.log(`[fileApi][upload] params -> ${JSON.stringify(params.get('file'), null, 2)}`);

    const url = '/files/upload';
    return await axiosClient.post(url, params, {
      headers: {
        Accept: 'application/json, application/xml, text/plain, text/html, *.*',
        'Content-Type': 'multipart/form-data, application/x-www-form-urlencoded;charset=utf-8',
      },
    });
  },
};

export default fileApi;
