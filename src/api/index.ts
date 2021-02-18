import axios from 'axios';
import { NewExercise, NewExerciseResponse } from 'types';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export default api;

export async function getAllUsers() {
  try {
    const response = await api.get('/users');
    return response.data;
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
    const data: NewExerciseResponse = response.data;
    return data;
  } catch (error) {
    throw error;
  }
}
