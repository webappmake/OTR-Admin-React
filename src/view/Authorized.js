import * as React from 'react';
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

export default function Authorized() { 
    
    return (
        <div className='contents'>
            <PerfectScrollbar className='vertical-scroll-area'>
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        '& > :not(style)': {
                        m: 2,
                        width: 345,
                        },
                    }}
                >
                    <Card>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Stack direction="row" spacing={1}>
                                <Chip label="Accepted" size="small" color="accepted"/>
                            </Stack>
                        </CardActions>
                    </Card>
                    <Card>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Stack direction="row" spacing={1}>
                                <Chip label="Accepted" size="small" color="accepted"/>
                            </Stack>
                        </CardActions>
                    </Card>     
                    <Card>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Stack direction="row" spacing={1}>
                                <Chip label="Accepted" size="small" color="accepted"/>
                                <Chip label="Test" size="small" color="test" />
                            </Stack>
                        </CardActions>
                    </Card>
                </Box>            
           </PerfectScrollbar>       
        </div>
    );
}
