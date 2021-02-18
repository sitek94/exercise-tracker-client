import {
  createMuiTheme,
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
} from '@material-ui/core';
import darkScrollbar from '@material-ui/core/darkScrollbar';

const theme = createMuiTheme({
  palette: {
    mode: 'dark',
 
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: darkScrollbar(),
      },
    },
  },
});

interface Props {
  children: React.ReactNode;
}

export default function ThemeProvider({ children }: Props) {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}
