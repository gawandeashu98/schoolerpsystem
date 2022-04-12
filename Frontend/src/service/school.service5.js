import httpClient from '../http-common5';

const addattendance = (data) => {
    return httpClient.post('/addattendance', data);
};

const findattendance = (data) => {
    return httpClient.post('/getall', data);
};

const getattendance = (data) => {
    return httpClient.post('/fetchatt',data);
};

export default { addattendance, findattendance, getattendance };