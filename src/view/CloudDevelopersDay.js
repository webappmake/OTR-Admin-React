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
