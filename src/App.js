import React from "react";
import './assets/scss/otr.scss';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import IntellyticsHeader from "./components/IntellyticsHeader";
import IntellyticsContainer from "./components/IntellyticsContainer";
import IntellyticsFooter from "./components/IntellyticsFooter";

const theme = createTheme({
  status: {
    danger: '#D00202',
  },
  palette: {
    primary: {
      main: '#333333', //#5D5FEF',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#ffe228',
      contrastText: '#ffffff',
    },
    accepted: {
      main: '#4d4ddb',
      contrastText: '#ffffff',
    },
    test: {
      main: '#f16c35',
      contrastText: '#ffffff',
    }
  },  
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box className='wrapper'>
        <IntellyticsHeader/>
        <IntellyticsContainer/>
        <IntellyticsFooter/>
      </Box>
      {/* <Box sx={{ display: 'flex' }}>
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
      </Box> */}
    </ThemeProvider>
  );
}
export default App;
