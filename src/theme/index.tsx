import {
  createMuiTheme,
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
} from '@material-ui/core';
import darkScrollbar from '@material-ui/core/darkScrollbar';
import '@material-ui/lab/themeAugmentation';

const theme = createMuiTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#0984e3',
    },
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
