import httpClient from '../http-common4';

const addtimetable = (data) => {
    return httpClient.post('/addtimetable', data);
};



const update = (data) => {
    return httpClient.patch('', data);
};

// const findtimetable = (date,cls) => {
//     return httpClient.get('/findtimetable', date,cls);
// };

const findtimetable = (data) => {
    return httpClient.post('/findtimetable', data);
};

const gettimetable = (id) => {
    return httpClient.get(`/${id}`);
};

export default { addtimetable, update, findtimetable, gettimetable };