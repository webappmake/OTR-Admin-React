import React, { useEffect } from "react";
import '../assets/scss/CloudDevelopersDay.scss';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CloudDevelopersDayHeader from "../components/CloudDevelopersDayHeader";
import CloudDevelopersDayContainer from "../components/CloudDevelopersDayContainer";
import CloudDevelopersDayFooter from "../components/CloudDevelopersDayFooter";

const theme = createTheme({
  status: {
    danger: '#D00202',
  },
  palette: {
    primary: {
      main: '#191f28',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#ffe228',
      contrastText: '#333333',
    },
    accepted: {
      main: '#a50034',
      contrastText: '#ffffff',
    }
  },  
});

function CloudDevelopersDay() {

  useEffect(() => {
    let vh = 0;
    vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, [window.innerHeight]);

  return (
    <ThemeProvider theme={theme}>
        <CloudDevelopersDayHeader/>
        <CloudDevelopersDayContainer/>
        <CloudDevelopersDayFooter/> 
    </ThemeProvider>
  );
}
export default CloudDevelopersDay;
