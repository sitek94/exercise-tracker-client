import * as React from 'react';
import { useAsync } from 'hooks/use-async';
import { getExerciseLog } from 'api';
import { LogQueryResponse } from 'types';
import { AxiosError } from 'axios';

export default function ExerciseLog() {
  const [userId, setUserId] = React.useState('');
  const [from, setFrom] = React.useState('');
  const [to, setTo] = React.useState('');
  const [limit, setLimit] = React.useState('');

  const { status, value, error, execute } = useAsync<
    LogQueryResponse,
    AxiosError
  >(
    async () =>
      getExerciseLog({
        userId,
        from: from ? from : undefined,
        to: to ? to : undefined,
        limit: limit ? Number(limit) : undefined,
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
      {status === 'error' && (
        <div style={{ backgroundColor: 'red', color: 'white' }}>
          <p>Error</p>
          <pre>
            {JSON.stringify(
              error?.response?.data?.error || error?.message,
              null,
              2,
            )}
          </pre>
        </div>
      )}
      {status === 'success' && (
        <div>
          <div style={{ backgroundColor: 'green', color: 'white' }}>
            <p>Here's the log</p>
          </div>
        </div>
      )}
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
          <label htmlFor="from">From*</label>
          <input
            id="from"
            value={from}
            onChange={e => setFrom(e.currentTarget.value)}
            placeholder="Explosive push up workout"
          />
        </div>
        <div>
          <label htmlFor="to">To* (minutes)</label>
          <input
            id="to"
            type="number"
            value={to}
            onChange={e => setTo(e.currentTarget.value)}
          />
        </div>
        <div>
          <label htmlFor="limit">Limit (YYYY-MM-DD)</label>
          <input
            id="limit"
            type="limit"
            value={limit}
            onChange={e => setLimit(e.currentTarget.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      <pre>{JSON.stringify(value, null, 2)}</pre>
    </section>
  );
}
