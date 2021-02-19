import { Avatar, Box, Typography } from '@material-ui/core';

interface Props {
  icon: React.ReactElement;
  title: string;
}

function ScreenHeader({ icon, title }: Props) {
  return (
    <Box
      sx={{
        my: 5,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Avatar
        sx={{
          my: 2,
          height: 70,
          width: 70,
          bgcolor: 'primary.light',
          '& > svg': {
            fontSize: 40,
          },
        }}
      >
        {icon}
      </Avatar>
      <Typography variant="h5" component="h1" align="center">
        {title}
      </Typography>
    </Box>
  );
}

export { ScreenHeader };
