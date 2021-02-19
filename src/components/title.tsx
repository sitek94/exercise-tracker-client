import { Typography } from '@material-ui/core';

interface Props {
  children: React.ReactNode;
}

function Title({ children }: Props) {
  return (
    <Typography variant="h5" component="h1" align="center">
      {children}
    </Typography>
  );
}

export { Title };
