import * as React from 'react';
import api from 'api';
import { Status, UserId, Username } from 'types';

interface User {
  userId: UserId;
  username: Username;
}

export default function NewUser() {
  const [status, setStatus] = React.useState<Status>('idle');
  const [user, setUser] = React.useState<User | null>();
  const [message, setMessage] = React.useState('');

  const [username, setUsername] = React.useState('');
  const [input, setInput] = React.useState('');

  React.useEffect(() => {
    if (username) postNewUser();

    async function postNewUser() {
      setStatus('pending');

      try {
        const res = await api.post('/new-user', {
          username,
        });

        setStatus('success');
        setUser(res.data);
      } catch (error) {
        setMessage(error?.response?.data?.error || error.message);
        setStatus('error');
        console.log(error.response);
      }
    }
  }, [username]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (input !== username) {
      setUsername(input);
    }
  };

  const reset = () => {
    setUsername('');
    setStatus('idle');
    setInput('');
    setMessage('');
    setUser(null);
  };

  const isLoading = status === 'pending';
  const isError = status === 'error';
  const isSuccess = status === 'success';

  return (
    <section>
      <h2>Create a New User</h2>
      {isError && (
        <div style={{ backgroundColor: 'red', color: 'white' }}>
          <p>Error: {message}</p>
        </div>
      )}
      {isSuccess ? (
        <div>
          <div style={{ backgroundColor: 'green', color: 'white' }}>
            <p>Success: new user created!</p>
          </div>
          <pre>{JSON.stringify(user, null, 2)}</pre>
          <button onClick={reset}>Add new user</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username</label>
            <input
              value={input}
              onChange={e => setInput(e.currentTarget.value)}
            />
          </div>
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Loading...' : 'Submit'}
          </button>
        </form>
      )}
    </section>
  );
}
