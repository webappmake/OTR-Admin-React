import React, { useEffect } from "react";
import './assets/scss/AAA.scss';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  Box, 
  Toolbar
} from '@mui/material';
import AAAHeader from "./components/AAAHeader";
import AAAContainerFluid from "./components/AAAContainerFluid";

const theme = createTheme({
  status: {
    danger: '#D00202',
  },
  palette: {
    primary: {
      main: '#5D5FEF',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#7879F1',
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

function AAA() {

  useEffect(() => {
    let vh = 0;
    vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, [window.innerHeight]);

  return (
    <ThemeProvider theme={theme}>
      <Box className='AAA-common-layout'>
        <AAAHeader/>
        <Toolbar />
        <AAAContainerFluid/>
      </Box>
    </ThemeProvider>
  );
}
export default AAA;