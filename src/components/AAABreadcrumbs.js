import * as React from 'react';
import {
  Box, 
  Breadcrumbs,
  Link,
  Stack, 
  Button, 
  Divider
} from '@mui/material';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function AAABreadcrumbs() {
  return (
    <Box
      className='AAA-breadcrumbs-wrap' 
      role="presentation" 
      onClick={handleClick}
    >
      <Breadcrumbs 
        className='AAA-breadcrumbs'
        aria-label="breadcrumb"
      >
        <Link 
          underline="hover" 
          color="inherit" 
          href="/"
        >
          1Depth
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/"
        >
          2Depth
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/"
          aria-current="page"
        >
          3Depth
        </Link>
        <Link
          underline="hover"
          color="text.primary"
          href="/"
          aria-current="page"
        >
          Active
        </Link>
      </Breadcrumbs>
      <Stack spacing={1} direction="row">
        <Button variant="text">Package List</Button>
        <Button variant="text">Version Code History</Button>
        <Button variant="outlined">Edit</Button>
        <Button variant="contained">Save</Button>        
      </Stack>
    </Box>
  );
}