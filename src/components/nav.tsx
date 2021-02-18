import * as React from 'react';
import { AppBar, Button, Toolbar, useTheme } from '@material-ui/core';
import { Link as RouterLink, useMatch } from 'react-router-dom';

interface NavProps {
  children?: React.ReactNode;
}

function Nav({ children }: NavProps) {
  const theme = useTheme();

  return (
    <AppBar position="fixed">
      <Toolbar
        sx={{
          maxWidth: theme.breakpoints.values.md,
          width: '100%',
          mx: 'auto',
        }}
      >
        {children}
      </Toolbar>
    </AppBar>
  );
}

interface NavItemLinkProps {
  label: string;
  to: string;
}

function NavItemLink({ label, to }: NavItemLinkProps) {
  const matches = useMatch(to);
  const theme = useTheme();

  return (
    <Button
      color="inherit"
      size="large"
      component={RouterLink}
      to={to}
      sx={{
        px: 2,
        flex: 1,
        alignSelf: 'stretch',
        borderRadius: '0 !important',
        borderBottom: matches
          ? `2px solid ${theme.palette.common.white}`
          : undefined,
      }}
    >
      {label}
    </Button>
  );
}

export { Nav, NavItemLink };
