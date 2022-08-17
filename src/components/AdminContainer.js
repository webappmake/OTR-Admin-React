import * as React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs, Box } from '@mui/material';
import AdminAuthorized from '../view/AdminAuthorized';
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

export default function AdminContainer() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box component="main" className='common-container'>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs className='common-tabs' value={value} onChange={handleChange}>
                    <Tab label="Authorized" {...a11yProps(0)} />
                    <Tab label="Unauthorized" {...a11yProps(1)} />
                    <Tab label="Declined" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <TabPanel className='common-tab-panel' value={value} index={0}>
                <AdminAuthorized />
            </TabPanel>
            <TabPanel className='common-tab-panel' value={value} index={1}>
                <Unauthorized />
            </TabPanel>
            <TabPanel className='common-tab-panel' value={value} index={2}>
                <Declined />
            </TabPanel>
        </Box>     
    );
  }
  