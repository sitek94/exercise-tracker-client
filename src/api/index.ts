import axios from 'axios';
import {
  NewExercise,
  NewExerciseResponse,
  UserList,
  LogQuery,
  LogQueryResponse,
  Username,
  User,
} from 'types';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export default api;

export async function postNewUser(username: Username) {
  try {
    const response = await api.post('/new-user', {
      username,
    });

    const user: User = response.data;

    return user;
  } catch (error) {
    throw error;
  }
}

export async function getAllUsers() {
  try {
    const response = await api.get('/users');

    const userList: UserList = response.data;

    return userList;
  } catch (error) {
    throw error;
  }
}

export async function postAddExercise(newExercise: NewExercise) {
  try {
    const { userId, description, duration, date } = newExercise;

    const response = await api.post('/add', {
      userId,
      description,
      duration,
      date,
    });

    const newExerciseResponse: NewExerciseResponse = response.data;

    return newExerciseResponse;
  } catch (error) {
    throw error;
  }
}

export async function getExerciseLog(query: LogQuery) {
  try {
    const { userId, from, to, limit } = query;

    const response = await api.get('log', {
      params: {
        userId,
        from,
        to,
        limit,
      },
    });

    const log: LogQueryResponse = response.data;

    return log;
  } catch (error) {
    throw error;
  }
}
