import * as React from 'react';
import {
  Box,
  Divider
} from '@mui/material';
import AAABreadcrumbs from './AAABreadcrumbs';
import AAAContents from './AAAContents';

export default function AAAContainer() {
  return (    
    <Box className='AAA-container'>
      <AAABreadcrumbs/>
      <Divider variant="middle" />
      <AAAContents />
    </Box>
  );
}