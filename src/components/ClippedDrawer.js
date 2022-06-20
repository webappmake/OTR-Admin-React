import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
// import { Link as RouterLink } from "react-router-dom";

const drawerWidth = 256;

export default function ClippedDrawer() {
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
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {['Home', 'Process Status', 'App Version Code', 'Publishing'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton href={text}>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider class="list-divider"/>
          <List subheader={<ListSubheader color="primary">Admin Menu</ListSubheader>}>
            {['User Management', 'Preset Management', 'Web Simulation'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton href={text}>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

  );
}
