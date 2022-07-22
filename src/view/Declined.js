import * as React from 'react';
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
export default function Declined() { 
    

    return (
        <div className='contents'>
            <PerfectScrollbar className='vertical-scroll-area'>
                <Box className='card-wrap declined'>             
                    <Card>
                        <CardContent>
                            <h3 className='card-tit'>ThinQ &amp; Amazon DRS</h3>
                            <p className='card-desc'> ThinQ and Amazon DRS(Dash Replenishment Service) 관련 지표를 확인할 수 있는 대시보드입니다.</p>
                        </CardContent>
                        <Fab variant="extended" color="secondary" size="medium">
                            <AddIcon sx={{ mr: 1 }} />
                            <span>Re-request</span>
                        </Fab> 
                    </Card>
                    <Card>
                        <CardContent>
                            <h3 className='card-tit'>ThinQ Home</h3>
                            <p className='card-desc'> BS 사업부의 B2B HomeIoT 서비스 대시보드입니다.</p>
                            <div className='chip-wrap'>
                                <Chip label="Test" size="small" color="test"/>
                            </div>
                        </CardContent>
                        <Fab variant="extended" color="secondary" size="medium">
                            <AddIcon sx={{ mr: 1 }} />
                            <span>Re-request</span>
                        </Fab> 
                    </Card>                 
                    <Card>
                        <CardContent>
                            <h3 className='card-tit'>LG DataHub</h3>
                            <p className='card-desc'>3DataHub 관련 지표를 보여주는 대시보드입니다.</p>
                        </CardContent>
                        <Fab variant="extended" color="secondary" size="medium">
                            <AddIcon sx={{ mr: 1 }} />
                            <span>Re-request</span>
                        </Fab> 
                    </Card>
                </Box>            
            </PerfectScrollbar>       
        </div>
    );
}