import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import * as React from 'react';
import { User, Username, UserId } from 'types';
import { CopyToClipboard } from 'react-copy-to-clipboard';

interface Props {
  user: User;
}

export function SingleUserTable({ user }: Props) {
  const { username, _id } = user;

  const renderRow = (label: string, value: Username | UserId) => {
    return (
      <CopyToClipboard text={value}>
        <TableRow hover sx={{ cursor: 'pointer' }}>
          <TableCell variant="head">{label}</TableCell>
          <TableCell>{value}</TableCell>
        </TableRow>
      </CopyToClipboard>
    );
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableBody>
          {renderRow('Username:', username)}
          {renderRow('User ID:', _id)}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
