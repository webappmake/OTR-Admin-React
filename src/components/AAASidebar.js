import * as React from 'react';
import {
  Drawer,
  Box,
  List,
  ListItem,
  ListItemButton, 
  ListItemText,
  Divider,
  Toolbar,
  ListSubheader,
} from '@mui/material';
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';

const drawerWidth = 256;

export default function AAASidebar() {
  return (
    <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <PerfectScrollbar>
          <Box className='AAA-sidebar'>         
            <List>
              {['Home', 'Process Status', 'App Management', 'Publishing Management'].map((text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider className='cu-divider'/>
            <List
              subheader={
                <ListSubheader component="div" className='cu-sub-header'>
                  Admin Menu
                </ListSubheader>
              }>
              {['User Management', 'Web Simulation'].map((text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>          
          </Box>
        </PerfectScrollbar>
      </Drawer>
      
  );
}