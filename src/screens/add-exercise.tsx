import * as React from 'react';
import { useAsync } from 'hooks/use-async';
import { postAddExercise } from 'api';
import { NewExerciseResponse } from 'types';
import { formatDate } from 'utils';

export default function AddExercise() {
  const [userId, setUserId] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [duration, setDuration] = React.useState('');
  const [date, setDate] = React.useState('');

  const { status, value, error, execute } = useAsync<NewExerciseResponse>(
    async () =>
      postAddExercise({
        userId,
        description,
        duration: Number(duration),
        date: date ? date : formatDate(new Date()),
      }),
    false,
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    execute();
  };

  return (
    <section>
      <h2>Add Exercise</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="userId">User ID*</label>
          <input
            id="userId"
            placeholder="fCcIsTh3b3$t"
            value={userId}
            onChange={e => setUserId(e.currentTarget.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description*</label>
          <input
            id="description"
            value={description}
            onChange={e => setDescription(e.currentTarget.value)}
            placeholder="Explosive push up workout"
            required
          />
        </div>
        <div>
          <label htmlFor="duration">Duration* (minutes)</label>
          <input
            id="duration"
            type="number"
            value={duration}
            onChange={e => setDuration(e.currentTarget.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="date">Date (YYYY-MM-DD)</label>
          <input
            id="date"
            type="date"
            value={date}
            onChange={e => setDate(e.currentTarget.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {status === 'error' && (
        <div style={{ backgroundColor: 'red', color: 'white' }}>
          <p>Error</p>
          <pre>{JSON.stringify(error, null, 2)}</pre>
        </div>
      )}
      {status === 'success' && (
        <div>
          <div style={{ backgroundColor: 'green', color: 'white' }}>
            <p>Success: new user created!</p>
          </div>
          <pre>{JSON.stringify(value, null, 2)}</pre>
        </div>
      )}
    </section>
  );
}
