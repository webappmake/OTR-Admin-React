import * as React from 'react';
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';

export default function Authorized() {     
    return (
        <div className='contents'>
            <PerfectScrollbar className='vertical-scroll-area'>
                <Box
                    className='card-wrap'
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        '& > :not(style)': {
                        m: 2,
                        width: 345,
                        height: 150
                        },
                    }}
                >
                    <Card>
                        <CardActionArea>                            
                            <CardContent>
                                <h3 className='card-tit'>ThinQ 통합대시보드</h3>
                                <p className='card-desc'>ThinQ Cloud, App, Service 지표를 확인하실 수 있습니다.</p>
                                <div className='chip-wrap'>
                                    <Chip label="Accepted" size="small" color="accepted" disabled={true}/>
                                </div>
                            </CardContent>
                        </CardActionArea>
                    </Card> 
                    <Card>
                        <CardActionArea>
                            <CardContent>
                                <h3 className='card-tit'>H&amp;A 데이터 대시보드</h3>
                                <p className='card-desc'>H&amp;A 사업본부의 제품 및 서비스 지표를 확인할 수 있습니다.  소속을 명확히 기입해 주세요.</p>
                                <div className='chip-wrap'>
                                    <Chip label="Accepted" size="small" color="accepted"/>
                                </div>
                            </CardContent>
                        </CardActionArea>           
                    </Card>
                    <Card>
                        <CardActionArea>
                            <CardContent>
                                <h3 className='card-tit'>ThinQ Cloud 2.0</h3>
                                <p className='card-desc'>ThinQ 2.0 관련된 기기 등록 및 접속, 사용자, 생산정보, 루틴 관련된 지표를 볼 수 있습니다. 권한요청시 필요하신 지표항목을 명시해주세요.</p>
                                <div className='chip-wrap'>
                                    <Chip label="Accepted" size="small" color="accepted"/>
                                </div>
                            </CardContent>
                        </CardActionArea>
                    </Card>     
                    <Card>
                        <CardActionArea>
                            <CardContent>
                                <h3 className='card-tit'>TAS:ThinQ App Server</h3>
                                <p className='card-desc'>TAS가 관리하는 전반의 데이터에 대한 지표입니다.</p>
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
