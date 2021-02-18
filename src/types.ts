export type Status = 'idle' | 'pending' | 'error' | 'success';

export type Username = string;
export type UserId = string;

export interface User {
  _id: UserId;
  username: Username;
}
export type UserList = User[];

export type ExerciseDescription = string;
export type ExerciseDuration = number;
export type ExerciseDate = string;

export interface NewExercise {
  userId: UserId;
  description: ExerciseDescription;
  duration: ExerciseDuration;
  date?: ExerciseDate;
}

export interface NewExerciseResponse {
  _id: UserId;
  username: Username;
  description: ExerciseDescription;
  duration: ExerciseDescription;
  date: ExerciseDate;
}
