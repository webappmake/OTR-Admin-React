import React, { useEffect } from "react";
import './assets/scss/IntellyticsDashboard.scss';
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

function IntellyticsDashboard() {

  useEffect(() => {
    let vh = 0;
    vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, [window.innerHeight]);

  return (
    <ThemeProvider theme={theme}>
      <Box className='wrapper'>
        <IntellyticsHeader/>
        <IntellyticsContainer/>
        <IntellyticsFooter/>
      </Box>
    </ThemeProvider>
  );
}
export default IntellyticsDashboard;
