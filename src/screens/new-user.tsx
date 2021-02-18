import * as React from 'react';
import useAsync from 'hooks/use-async';
import { postNewUser } from 'api';
import { AxiosError } from 'axios';
import { User } from 'types';

export default function NewUser() {
  const [username, setUsername] = React.useState('');

  const { status, value, error, execute, reset } = useAsync<User, AxiosError>(
    async () => postNewUser(username),
    false,
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (username) {
      execute();
    }
  };

  return (
    <section>
      <h2>Create a New User</h2>
      {status === 'error' && (
        <div style={{ backgroundColor: 'red', color: 'white' }}>
          <p>Error: {error?.response?.data?.error || error?.message}</p>
        </div>
      )}
      {status === 'success' ? (
        <div>
          <div style={{ backgroundColor: 'green', color: 'white' }}>
            <p>Success: new user created!</p>
          </div>
          <pre>{JSON.stringify(value, null, 2)}</pre>
          <button onClick={reset}>Add new user</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username</label>
            <input
              value={username}
              onChange={e => setUsername(e.currentTarget.value)}
            />
          </div>
          <button type="submit" disabled={status === 'pending'}>
            {status === 'pending' ? 'Loading...' : 'Submit'}
          </button>
        </form>
      )}
    </section>
  );
}
