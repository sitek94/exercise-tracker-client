import axios from 'axios';

const exerciseTracker = axios.create({
  baseURL: process.env.REACT_APP_API_URL + '/api/exercise',
});

export default exerciseTracker;
