import * as React from 'react';
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { 
    Box,
    Card, 
    CardContent,
    CardActionArea, 
    Chip
} from '@mui/material';

export default function AdminAuthorized() {     
    return (
        <div className='contents'>
            <PerfectScrollbar className='vertical-scroll-area'>
                <Box className='card-wrap'>
                    <Card>
                        <CardActionArea>                            
                            <CardContent>
                                <h3 className='card-tit'>Android App Admin</h3>
                                <p className='card-desc'>Android OS 기반 App 관리</p>
                                <div className='chip-wrap'>
                                    <Chip label="Accepted" size="small" color="accepted" disabled={true}/>
                                </div>
                            </CardContent>
                        </CardActionArea>
                    </Card> 
                    <Card>
                        <CardActionArea>
                            <CardContent>
                                <h3 className='card-tit'>3rd Party App Admin</h3>
                                <p className='card-desc'>3rd Party App 관리</p>
                                <div className='chip-wrap'>
                                    <Chip label="Accepted" size="small" color="accepted"/>
                                </div>
                            </CardContent>
                        </CardActionArea>           
                    </Card>
                    <Card>
                        <CardActionArea>
                            <CardContent>
                                <h3 className='card-tit'>LUPA Admin</h3>
                                <p className='card-desc'></p>
                                <div className='chip-wrap'>
                                    <Chip label="Accepted" size="small" color="accepted"/>
                                </div>
                            </CardContent>
                        </CardActionArea>
                    </Card>     
                    <Card>
                        <CardActionArea>
                            <CardContent>
                                <h3 className='card-tit'>TAS Admin</h3>
                                <p className='card-desc'></p>
                                <div className='chip-wrap'>
                                    <Chip label="Accepted" size="small" color="accepted"/>
                                    <Chip label="Test" size="small" color="test"/>
                                </div>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Box>            
            </PerfectScrollbar>       
        </div>
    );
}
