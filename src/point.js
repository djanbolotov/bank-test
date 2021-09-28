import axios from 'axios';

const point = axios.create({
  baseURL: 'https://bank-b2bd9-default-rtdb.firebaseio.com/',
});

export default point;