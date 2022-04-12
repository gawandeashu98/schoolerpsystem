import httpClient from '../http-common1';


const loginstudent = (data) => {
  return httpClient.post('/studentlogin', data);
};
const addstudent = (data) => {
  return httpClient.post('/addstudent', data);
};
const findstudent = (id) => {
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
const promotestudent = (data) => {
  return httpClient.post('/promotestudent', data);
};

export default { loginstudent, addstudent, findstudent, update, remove, getAll, promotestudent };
