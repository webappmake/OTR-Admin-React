import * as React from 'react';
import logoSvg from '../assets/img/cloud-developers-day-logo.svg';
import { 
    Fab, 
    Link,    
    Button,  
    Dialog, 
    DialogActions, 
    DialogContent, 
    DialogContentText,
    DialogTitle, 
    FormControlLabel, 
    Checkbox
} from '@mui/material';

export default function CloudDevelopersDayHeader() {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <header className='cloud-developers-day-header'>
            <h1>
                <img src={logoSvg} alt="2022 Cloud Developer’s Day"/>
            </h1>
            <dl className='event-details'>
                <dt>행사 상세정보</dt>
                <dd>
                    <em>9/29(목) 09:00 ~ 17:00 | 서초 R&amp;D캠퍼스</em>
                    <span>(컨퍼런스룸/이벤트홀/살롱드서초)</span>
                </dd>
            </dl>
            <nav className='nav'>
                <Link className='user-info' href="#" color="inherit" underline="none">
                    <span className='name'>김혜정</span>
                    <span>haejung.kim@lge.com</span>
                </Link>
                <FormControlLabel 
                    control={<Checkbox color="accepted"/>} 
                    label="개인정보 수집 및 이용 동의" 
                />
                <Fab variant="extended" color="accepted" size="medium" onClick={handleClickOpen}>
                    <span>참가신청하기</span>                   
                </Fab> 
            </nav>

            {/* Dialog */}
            <Dialog open={open} onClose={handleClose} className='intellytics-dialog'>
                <DialogTitle>
                    신청이 완료되었습니다.
                </DialogTitle>
                <DialogContent>                    
                    <DialogContentText>
                        (예시) 참가 신청 내역은 '마이페이지 &#62; 신청내역'에서 확인 가능합니다. 
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="secondary" variant="contained">확인</Button>
                </DialogActions>
            </Dialog>     
        </header>
    );
  }