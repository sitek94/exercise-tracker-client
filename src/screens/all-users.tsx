import { useAsync } from 'hooks/use-async';
import { getAllUsers } from 'api';
import { UserList } from 'types';
import { Avatar, Box, Container, Paper } from '@material-ui/core';
import { Title } from 'components/title';
import { Groups } from '@material-ui/icons';
import { UsersTable } from 'components/users-table';

export default function AllUsers() {
  const { status, value: users, error } = useAsync<UserList>(getAllUsers);

  return (
    <Container maxWidth="sm">
      <Header />
      <Paper sx={{ px: 5, py: 5 }}>
        {status === 'error' && (
          <div style={{ backgroundColor: 'red', color: 'white' }}>
            <p>Error: problem</p>
            <pre>{JSON.stringify(error, null, 2)}</pre>
          </div>
        )}
        {status === 'pending' && <h2>Loading</h2>}

        {users ? <UsersTable rows={users} /> : null}
      </Paper>
    </Container>
  );
}

function Header() {
  return (
    <Box
      sx={{
        my: 5,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Avatar sx={{ my: 2, height: 70, width: 70, bgcolor: 'primary.light' }}>
        <Groups sx={{ fontSize: 40 }} />
      </Avatar>
      <Title>All users</Title>
    </Box>
  );
}
