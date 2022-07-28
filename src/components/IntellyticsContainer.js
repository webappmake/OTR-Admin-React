import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Authorized from '../view/Authorized';
import Unauthorized from '../view/Unauthorized';
import Declined from '../view/Declined';


function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box>{children}</Box>
            )}
        </div>
    );
}
  
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};
  
function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function IntellyticsContainer() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box component="main" className='intellytics-container'>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs className='intellytics-tabs' value={value} onChange={handleChange}>
                    <Tab label="Authorized" {...a11yProps(0)} />
                    <Tab label="Unauthorized" {...a11yProps(1)} />
                    <Tab label="Declined" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <TabPanel className='intellytics-tab-panel' value={value} index={0}>
                <Authorized />
            </TabPanel>
            <TabPanel className='intellytics-tab-panel' value={value} index={1}>
                <Unauthorized />
            </TabPanel>
            <TabPanel className='intellytics-tab-panel' value={value} index={2}>
                <Declined />
            </TabPanel>
        </Box>     
    );
  }
  