import httpClient from '../http-common3';

const addfaculty = (data) => {
    return httpClient.post('/addfaculty', data);
};

const remove = (id) => {
    return httpClient.delete(`/${id}`);
};

const getAll = () => {
    return httpClient.get('');
};

const update = (data) => {
    return httpClient.put('', data);
};

const findfaculty = (id) => {
    return httpClient.get(`/${id}`);
};
export default { addfaculty, remove, getAll, update, findfaculty };