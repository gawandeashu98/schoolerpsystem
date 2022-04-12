import httpClient from '../http-common2';

const addnotice = (data) => {
    return httpClient.post('/addnotice', data);
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

const findnotice = (id) => {
    return httpClient.get(`/${id}`);
};
export default { addnotice, remove, getAll, update, findnotice };
