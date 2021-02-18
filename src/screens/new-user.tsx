import * as React from 'react';
import useAsync from 'hooks/use-async';
import { postNewUser } from 'api';
import { AxiosError } from 'axios';
import { User } from 'types';
import { Title } from 'components/title';
import { Alert, TextField } from '@material-ui/core';
import { LoadingButton } from '@material-ui/lab';

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
    <>
      <Title>Create New User</Title>
      {status === 'error' && (
        <Alert variant="filled" severity="warning">
          Oppps:
          {error?.response?.data?.error || error?.message}
        </Alert>
      )}
      {status === 'success' && (
        <Alert variant="filled" severity="success">
          The user has been created successfully!
        </Alert>
      )}
      <form onSubmit={handleSubmit}>
        <TextField
          id="username"
          placeholder="johny_bravo_2000"
          value={username}
          onChange={e => setUsername(e.currentTarget.value)}
          fullWidth
          sx={{ mb: 2 }}
        />
        <LoadingButton
          variant="contained"
          type="submit"
          pending={status === 'pending'}
        >
          Submit
        </LoadingButton>
      </form>
    </>
  );
}
