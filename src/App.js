import React from "react";
import './assets/scss/portal.scss';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import IntellyticsHeader from "./components/IntellyticsHeader";
import IntellyticsContainer from "./components/IntellyticsContainer";
import IntellyticsFooter from "./components/IntellyticsFooter";
import CloudDevelopersDay from "./view/CloudDevelopersDay";

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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box className='wrapper'>
        <IntellyticsHeader/>
        <IntellyticsContainer/>
        <IntellyticsFooter/>
        <CloudDevelopersDay/>
      </Box>
    </ThemeProvider>
  );
}
export default App;
