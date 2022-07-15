import React from "react";
import './assets/scss/otr.scss';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ClippedDrawer from './components/ClippedDrawer';
import Box from '@mui/material/Box';
import Breadcrumbs from "./components/Breadcrumbs";
import Contents from "./components/Contents";


const theme = createTheme({
  status: {
    danger: '#D00202',
  },
  palette: {
    primary: {
      light: '#7879F1', //'#006699', //'#90A245',
      main: '#5D5FEF', //'#069CB3', //'#006699', //'#818B3E',
      darker: '#4A45BD', //'#006699', //'#666633',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#7879F1', //'#0082BC', //'#90A245',
      main: '#7879F1', //'#2EA4BF',// '#0082BC', //'#90A245',
      darker: '#7879F1', //'#0082BC', //'#90A245',
      contrastText: '#ffffff',
    },
    success: {
      main: '#4A45BD', //'#00708F', //'#666633',
      contrastText: '#ffffff',
    },
    search: {
      light: '#694DE8', //'#0194D6', //'#818B3E',
      main: '#8367FF', //'#00708F', //'#818B3E',
      darker: '#694DE8', //'#0194D6', //'#666633',
      contrastText: '#ffffff',
    }
  },  
});

function App() {
  return (
    <ThemeProvider theme={theme} className="App">
      <Box sx={{ display: 'flex' }}>
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              ThinQ SOTA Admin
            </Typography>
            <Button color="inherit">Request as User</Button>
            <Button color="inherit">Logout</Button>
          </Toolbar>
        </AppBar>
        <ClippedDrawer/>
        <Box component="main" className="container-fluid">
          <Toolbar />
          <Breadcrumbs/>
          <Contents/>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
export default App;
