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
      light: '#0A6787', //'#90A245', //'#7879F1', 
      main: '#0A6787', //'#818B3E', //'#5D5FEF',
      darker: '#0A6787', //'#666633', //'#4A45BD', 
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#32A3BE', //'#90A245', //'#7879F1',
      main: '#32A3BE', //'#90A245', //'#7879F1', 
      darker: '#32A3BE', //'#90A245', //'#7879F1', 
      contrastText: '#ffffff',
    },
    success: {
      main: '#32A3BE', //'#666633', //'#4A45BD',
      contrastText: '#ffffff',
    }, 
    search: {
      light: '#0194D6', //'#818B3E', //'#694DE8',
      main: '#0194D6', //'#818B3E', //'#8367FF',
      darker: '#0194D6', //'#666633', //'#694DE8' 
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
