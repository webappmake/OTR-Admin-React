import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function IconBreadcrumbs() {
  return (
    <div role="presentation" onClick={handleClick} className="breadcrumb">
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="inherit"
          href="/"
        >
          1Depth
        </Link>
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="inherit"
          href="/material-ui/getting-started/installation/"
        >
          2Depth
        </Link>
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="inherit"
          href="/material-ui/getting-started/installation/"
        >
          2Depth
        </Link>
        <Typography
          sx={{ display: 'flex', alignItems: 'center' }}
          color="text.primary"
        >
          Active
        </Typography>
      </Breadcrumbs>
      <Stack spacing={1} direction="row">
        <Button size="small" color="secondary">Package List</Button>
        <Button size="small" color="secondary">Version Code History</Button>        
        <Button variant="outlined" size="small" color="secondary">Edit</Button>
        <Button variant="contained" size="small" color="secondary">Request</Button>
        <Button variant="contained" size="small" color="success">Save</Button>
      </Stack>
    </div>
  );
}