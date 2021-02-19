import { Box, Container, useTheme } from '@material-ui/core';

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
  const theme = useTheme();

  return (
    <Box
      component="main"
      sx={{
        height: '100%',
        // Toolbar spacer
        paddingTop: theme.mixins.toolbar.minHeight + 'px',
      }}
    >
      {children}
    </Box>
  );
}

export { Layout, Content };
