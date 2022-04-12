import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:9090/student/',
  headers: {
    'Content-Type': 'application/json',
  }
});
