import httpClient from '../http-common';


const login = (data) => {
  return httpClient.post('/login', data);
};

const addadmin = (data) => {
  return httpClient.post('/addadmin', data);
};

const findadmin = (id) => {
  return httpClient.get(`/${id}`);
};

const update = (data) => {
  return httpClient.put('', data);
};

const remove = (id) => {
  return httpClient.delete(`/${id}`);
};
const getAll = () => {
  return httpClient.get('');
};
const addnotice = (data) => {
  return httpClient.post('/addnotice', data);
};
export default { login, update, remove, addadmin, findadmin, getAll, addnotice };
