import { Box, Container, Paper, Toolbar } from '@material-ui/core';

interface LayoutProps {
  children?: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <Container maxWidth="md" sx={{ height: '100vh' }}>
      {children}
    </Container>
  );
}

interface ContentProps {
  children?: React.ReactNode;
}

function Content({ children }: ContentProps) {
  return (
    <Paper component="main" square sx={{ height: '100%' }}>
      <Toolbar />
      <Box sx={{ py: 12, px: 22 }}>{children}</Box>
    </Paper>
  );
}

export { Layout, Content };
