import axios from 'axios';

const get = async (endpoint) => axios.get(`/api${endpoint}`);

export {
  get,
}