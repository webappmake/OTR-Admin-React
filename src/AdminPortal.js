import React, { useEffect } from "react";
import './assets/scss/AdminPortal.scss';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AdminHeader from "./components/AdminHeader";
import AdminContainer from "./components/AdminContainer";
import AdminFooter from "./components/AdminFooter";

const theme = createTheme({
  status: {
    danger: '#D00202',
  },
  palette: {
    primary: {
      main: '#333333',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#ffe228',
      contrastText: '#333333',
    },
    secondaryDark: {
      main: '#f9b200',
      contrastText: '#ffffff',
    },
    accepted: {
      main: '#4d4ddb',
      contrastText: '#ffffff',
    },
    test: {
      main: '#f16c35',
      contrastText: '#ffffff',
    },
    gray: {
      main: '#f1f2f2',
    },
  },  
});

function AdminPortal() {

  useEffect(() => {
    let vh = 0;
    vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, [window.innerHeight]);

  return (
    <ThemeProvider theme={theme}>
      <Box className='wrapper admin-portal'>
        <AdminHeader/>
        <AdminContainer/>
        <AdminFooter/>
      </Box>
    </ThemeProvider>
  );
}
export default AdminPortal;