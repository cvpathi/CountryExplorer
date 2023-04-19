import axios from 'axios';

const api = (url, methodType, data) => {
  return axios({
    url: url,
    method: methodType,
    data: data,
    crossDomain: true,
    headers: {},
  });
};

export default api;
