import * as React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { UserList } from 'types';
import { CopyToClipboard } from 'react-copy-to-clipboard';

interface Props {
  rows: UserList;
}

function UsersTable({ rows }: Props) {
  return (
    <TableContainer>
      <Table aria-label="all users table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Username</TableCell>
            <TableCell align="left">User ID</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(({ _id, username }) => (
            <TableRow key={_id} hover sx={{ cursor: 'pointer' }}>
              <TableCell component="th" scope="row">
                <CopyToClipboard text={username}>
                  <span>{username}</span>
                </CopyToClipboard>
              </TableCell>
              <TableCell>
                <CopyToClipboard text={_id}>
                  <span>{_id}</span>
                </CopyToClipboard>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export { UsersTable };
