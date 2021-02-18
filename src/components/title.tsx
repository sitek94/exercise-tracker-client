import { Typography } from '@material-ui/core';

interface Props {
  children: React.ReactNode;
}

function Title({ children }: Props) {
  return (
    <Typography variant="h3" component="h1" align="center" gutterBottom>
      {children}
    </Typography>
  );
}

export { Title };
