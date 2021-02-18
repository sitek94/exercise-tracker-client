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

export interface LogQuery {
  userId: UserId;
  from?: string;
  to?: string;
  limit?: number;
}

interface LogItem {
  description: ExerciseDescription;
  duration: ExerciseDuration;
  date: ExerciseDate;
}

export interface LogQueryResponse {
  _id: UserId;
  username: Username;
  count: number;
  log: LogItem[];
}
