import httpClient from '../http-common6';

const addresult = (data) => {
    return httpClient.post('/addmarks', data);
};

const findresult = (data) => {
    return httpClient.post('/getall', data);
};

const getresult = (data) => {
    return httpClient.post('/getparticular', data);
};

const getresultbyid = (id) => {
    return httpClient.get(`/${id}`);
};

const update = (data) => {
    return httpClient.put('', data);
};
export default { addresult, findresult, getresult, getresultbyid, update };