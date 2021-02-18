import useAsync from 'hooks/use-async';
import { getAllUsers } from 'api';
import { UserList } from 'types';

export default function AllUsers() {
  const { status, value: users, error } = useAsync<UserList>(getAllUsers);

  return (
    <section>
      <h2>All users</h2>
      {status === 'error' && (
        <div style={{ backgroundColor: 'red', color: 'white' }}>
          <p>Error: problem</p>
          <pre>{JSON.stringify(error, null, 2)}</pre>
        </div>
      )}
      {status === 'pending' && <h2>Loading</h2>}

      <p>There are {users?.length || 0} users</p>
      <ul>
        {users?.map(({ _id, username }) => (
          <li key={_id}>{username} --- {_id}</li>
        ))}
      </ul>
    </section>
  );
}
