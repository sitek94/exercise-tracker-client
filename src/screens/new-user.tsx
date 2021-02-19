import * as React from 'react';
import { useAsync } from 'hooks/use-async';
import {
  Alert,
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from '@material-ui/core';
import { Person } from '@material-ui/icons';
import { LoadingButton } from '@material-ui/lab';
import { postNewUser } from 'api';
import { AxiosError } from 'axios';
import { ScreenHeader } from 'components/screen-header';
import { User } from 'types';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { SingleUserTable } from 'components/single-user-table';

interface FormErrors {
  username: string;
}

export default function NewUser() {
  const [username, setUsername] = React.useState('');

  const { status, value: user, error, execute, reset } = useAsync<
    User,
    AxiosError
  >(async () => postNewUser(username), false);
  const [formErrors, setFormErrors] = React.useState<FormErrors | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!username) {
      setFormErrors({
        username: 'Username is required',
      });
    } else {
      setFormErrors(null);
      execute();
    }
  };

  const isError = status === 'error';
  const isLoading = status === 'pending';
  const isSuccess = status === 'success';

  return (
    <Container maxWidth="xs" sx={{ mt: 5 }}>
      <ScreenHeader title="New user" icon={<Person />} />

      <Box sx={{ my: 3 }}>
        {isError && (
          <Alert variant="filled" severity="error">
            {error?.response?.data?.error || error?.message}
          </Alert>
        )}

        {isSuccess && (
          <Alert variant="filled" severity="success">
            The user has been created successfully!
          </Alert>
        )}
      </Box>

      <Box>
        <Typography sx={{ mb: 2 }}></Typography>

        {isSuccess && user ? (
          <div>
            <Typography variant="body1" gutterBottom>
              You can find the newly created user's details below. Remember to
              save your ID - you will need it to add exercises.
            </Typography>

            <SingleUserTable user={user} />

            <CopyToClipboard text={user._id}>
              <Button variant="contained" fullWidth>
                Copy my user ID
              </Button>
            </CopyToClipboard>

            <Button variant="outlined" onClick={reset} fullWidth>
              Add another user
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <TextField
              id="username"
              label="Username"
              placeholder="johny_bravo_2000"
              value={username}
              onChange={e => setUsername(e.currentTarget.value)}
              error={!!formErrors?.username}
              helperText={formErrors?.username}
              fullWidth
              sx={{ mb: 2 }}
            />
            <LoadingButton
              type="submit"
              variant="contained"
              pending={isLoading}
              fullWidth
            >
              {isLoading ? 'Loading...' : 'Submit'}
            </LoadingButton>
          </form>
        )}
      </Box>
    </Container>
  );
}
