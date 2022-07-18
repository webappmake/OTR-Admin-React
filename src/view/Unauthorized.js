import * as React from 'react';
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

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
                <Box
                    className='card-wrap unauthorized'
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
                        <Fab color="secondary" aria-label="add">
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
                        <Fab color="secondary" aria-label="add">
                            <AddIcon />
                        </Fab>
                    </Card>                    
                    <Card>                        
                        <CardContent>
                            <h3 className='card-tit'>QuickSight 기반 대시보드</h3>
                            <p className='card-desc'>자체 데이터 편집 도구 (Quick Sight) 제공 및 Publish 기능 제공 합니다.</p>
                            <div className='chip-wrap'>
                                <Chip label="Test" size="small" color="test"/>
                            </div>
                        </CardContent>
                        <Fab color="secondary" aria-label="add">
                            <AddIcon />
                        </Fab>
                    </Card>                   
                    <Card>
                        <CardContent>
                            <h3 className='card-tit'>LG DataHub</h3>
                            <p className='card-desc'>3DataHub 관련 지표를 보여주는 대시보드입니다.</p>
                        </CardContent>
                        <Fab color="secondary" aria-label="add">
                            <AddIcon />
                        </Fab>
                    </Card>
                    <Card>
                        <CardContent>
                            <h3 className='card-tit'>Pro:Cloud 플랫폼</h3>
                            <p className='card-desc'>Pro:Cloud 플랫폼 Dashboard of DXT Center in LG Electronics.</p>
                        </CardContent>
                        <Fab color="secondary" aria-label="add">
                            <AddIcon />
                        </Fab>
                    </Card>
                </Box>            
            </PerfectScrollbar>

            {/* Dialog */}
            <Dialog open={open} onClose={handleClose} className='intellytics-dialog'>
                <DialogTitle>
                    <span>3rd party 음성AI플랫폼 대시보드 사용 요청</span>
                    {/* <Chip label="신규" size="small" color="accepted"/> */}
                </DialogTitle>
                <DialogContent>
                    
                    <DialogContentText>
                        <em>대시보드를 사용하기 위해서는 먼저 사용 요청을 해야 합니다.</em>
                        <span className='text-mark'>또한 본 대시보드 내 모든 정보는 회사 기밀에 해당하므로 사전 서면 승낙 없이<br/> 제3자에게 공개 혹은 누설, 제공이 금지됩니다. 위 내용에 동의하지 않으시면 대시보드 사용이 불가능함을 알려드립니다.</span>
                        상세 내용에 소속과 사용 목적을 적고 전송 버튼을 눌러주세요. 3rd party 음성AI플랫폼 대시보드 관리자의 이메일로 전송되며, 관리자가 승인 또는 거절하면 결과를 이메일로 확인하실 수 있습니다. 승인되었을 경우에만, 대시보드에 접속하실 수 있습니다.
                    </DialogContentText>
                    <TextField                        
                        fullWidth
                        id="id"
                        label="ID"
                        defaultValue="hyunjung.ryu"
                        variant="standard"
                        margin="dense"
                        InputProps={{
                            readOnly: true,
                        }}
                        size="small"
                    />
                    <TextField                        
                        fullWidth
                        id="name"
                        label="이름"
                        defaultValue="유현정"
                        variant="standard"
                        helperText="이름이 다른 경우, 수정해 주세요."
                        margin="dense"
                        size="small"
                    />
                    <TextField
                        fullWidth
                        id="division"
                        label="소속"
                        defaultValue="(주)와이드티엔에스"
                        variant="standard"
                        margin="dense"
                        size="small"
                    />
                    <TextField
                        focused
                        fullWidth
                        id="purpose"
                        label="목적"
                        multiline
                        rows={4}
                        helperText="대시보드 사용 목적을 적어주세요."
                        variant="standard"
                        margin="dense"
                        size="small"
                    />
                    <FormControlLabel 
                        control={<Checkbox color="secondaryDark"/>} 
                        label="사전 서면 승낙 없이 제3자에게 데이터를 공개, 누설, 제공하지 않겠습니다." 
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="gray" variant="contained">취소</Button>
                    <Button onClick={handleClose} color="secondary" variant="contained">전송</Button>
                </DialogActions>
            </Dialog>     
        </div>
    );
}