import * as React from 'react';
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';
import AddIcon from '@mui/icons-material/Add';
import RequestDialog from '../components/RequestDialog'
import {
    Card, 
    CardContent,
    Chip,
    Box,
    Fab
} from '@mui/material';

export default function Unauthorized() { 
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className='contents'>
            <PerfectScrollbar className='vertical-scroll-area'>
                <Box className='card-wrap unauthorized'>             
                    <Card>
                        <CardContent>
                            <h3 className='card-tit'>3rd party 음성AI플랫폼</h3>
                            <p className='card-desc'>3rd party 음성AI플랫폼(ex.Alexa, AoG, Clova..)과 연동된 자사 제품의 사용 지표을 확인할 수 있습니다.</p>
                        </CardContent>
                        <Fab color="secondary" aria-label="add" onClick={handleClickOpen}>
                            <AddIcon />
                        </Fab>
                    </Card>
                    <Card>
                        <CardContent>
                            <h3 className='card-tit'>ThinQ &amp; Amazon DRS</h3>
                            <p className='card-desc'> ThinQ and Amazon DRS(Dash Replenishment Service) 관련 지표를 확인할 수 있는 대시보드입니다.</p>
                        </CardContent>
                        <Fab color="secondary" aria-label="add" onClick={handleClickOpen}>
                            <AddIcon />
                        </Fab>
                    </Card>
                    <Card>
                        <CardContent>
                            <h3 className='card-tit'>ThinQ Home</h3>
                            <p className='card-desc'> BS 사업부의 B2B HomeIoT 서비스 Dashboard입니다.</p>
                            <div className='chip-wrap'>
                                <Chip label="Test" size="small" color="test"/>
                            </div>
                        </CardContent>
                        <Fab color="secondary" aria-label="add" onClick={handleClickOpen}>
                            <AddIcon />
                        </Fab>
                    </Card>                    
                    <Card>                        
                        <CardContent>
                            <h3 className='card-tit'>QuickSight 기반 대시보드</h3>
                            <p className='card-desc'>자체 데이터 편집 도구 (Quick Sight) 제공 및 Publish 기능을 제공 합니다.</p>
                            <div className='chip-wrap'>
                                <Chip label="Test" size="small" color="test"/>
                            </div>
                        </CardContent>
                        <Fab color="secondary" aria-label="add" onClick={handleClickOpen}>
                            <AddIcon />
                        </Fab>
                    </Card>                   
                    <Card>
                        <CardContent>
                            <h3 className='card-tit'>LG DataHub</h3>
                            <p className='card-desc'>3DataHub 관련 지표를 보여주는 대시보드입니다.</p>
                        </CardContent>
                        <Fab color="secondary" aria-label="add" onClick={handleClickOpen}>
                            <AddIcon />
                        </Fab>
                    </Card>
                    <Card>
                        <CardContent>
                            <h3 className='card-tit'>Pro:Cloud 플랫폼</h3>
                            <p className='card-desc'>Pro:Cloud 플랫폼 Dashboard of DXT Center in LG Electronics.</p>
                        </CardContent>
                        <Fab color="secondary" aria-label="add" onClick={handleClickOpen}>
                            <AddIcon />
                        </Fab>
                    </Card>
                </Box>            
            </PerfectScrollbar>
            
            {/* Dialog */}
            <RequestDialog open={open} onClose={handleClose}/>     
        </div>
    );
}