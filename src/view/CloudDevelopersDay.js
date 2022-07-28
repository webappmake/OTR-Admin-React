import React from "react";
import '../assets/scss/CloudDevelopersDay.scss';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CloudDevelopersDayHeader from "../components/CloudDevelopersDayHeader";
import CloudDevelopersDayContainer from "../components/CloudDevelopersDayContainer";
import CloudDevelopersDayFooter from "../components/CloudDevelopersDayFooter";

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
    accepted: {
      main: '#4d4ddb',
      contrastText: '#ffffff',
    }
  },  
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box className='wrapper'>
        <CloudDevelopersDayHeader/>
        <CloudDevelopersDayContainer/>
        <CloudDevelopersDayFooter/>        
      </Box>
    </ThemeProvider>
  );
}
export default App;
