import * as React from 'react';
import logoSvg from '../assets/img/cloud-developers-day-logo.svg';
import {
    Link,    
    Button,  
    Dialog, 
    DialogActions, 
    DialogContent, 
    DialogContentText,
    DialogTitle, 
    FormControlLabel, 
    Checkbox, 
    FormGroup
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

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
            <nav className='nav'>
                <h1>
                    <img src={logoSvg} alt="2022 Cloud Developer’s Day"/>
                </h1>
                <Link className='user-info' href="#" color="inherit" underline="none">
                    <span className='name'>kiwook.shim</span>
                    <span>클라우드플랫폼(연) DAMDA개발 Task 심기욱 / 책임연구원</span>
                </Link>
            </nav>
            <div className='event-wrapper'>
                {/* <h2>행사 일정 및 참가신청</h2> */}
                <div className='event'>
                    <div className='event-header'>
                        <h3 className='tit'>
                            <span>Conference</span>
                            {/* <span className='text-red'>컨퍼런스 참가신청 및 참석해 주신 분들께는 행사 당일 소정의 사은품 증정 예정</span>  */}
                        </h3>
                        <p className='schedule'>
                            <em>10/26(수) 09:00 ~ 17:00 | 서초 R&amp;D캠퍼스</em>
                            <span>(컨퍼런스룸/이벤트홀/살롱드서초)</span>
                        </p>
                    </div>                    
                    <div className='event-contents'>
                    <span className='text-red'>컨퍼런스 참가신청 및 참석해 주신 분들께는 행사 당일 소정의 사은품 증정 예정.</span>                                        
                        <FormGroup>
                            <FormControlLabel 
                                control={<Checkbox color="accepted"/>} 
                                label="개인정보 수집 및 이용에 관한 사항 및 행동 강령 (필수)" 
                            />                                   
                            <FormControlLabel 
                                control={<Checkbox color="accepted"/>} 
                                label="개인정보 제 3자 제공 및 국외 이전에 관한 사항 (필수)" 
                            />                            
                        </FormGroup>
                        <Button className='custom-button' variant="outlined" size="large" onClick={handleClickOpen}>
                            참가신청하기
                        </Button>
                    </div>
                </div>

                <div className='event'>
                    <div className='event-header'>
                        <h3 className='tit'>GameDay</h3>
                        <p className='schedule'>
                            <em>10/25(화) 13:00 ~ 17:00 | 서초 R&amp;D캠퍼스</em>
                            <span>(이벤트홀)</span>
                        </p>
                    </div>
                    <div className='event-contents'>
                        <p className='desc'>
                            10/05(수)까지 3~4명 팀 구성하여 참가 신청서를 작성 후, <a className='email' href="mailto: kyoungp@amazon.com">kyoungp@amazon.com</a> 메일 전송.<br/>
                            우승 팀에게는 소정의 선물과 트로피 증정 예정.&ensp;
                            <Button variant="outlined" size="small" endIcon={<DownloadIcon />}>
                                신청서 다운로드
                            </Button>  
                        </p>                                              
                    </div>
                </div>

                <div className='event'>
                    <div className='event-header'>
                        <h3 className='tit'>Hackathon</h3>
                        <p className='schedule'>
                            <em>10/26(수) ~ 11/17(목)</em>
                        </p>
                    </div>
                    <div className='event-contents'>
                        <p className='desc'>
                            10/28(금)까지 3~4명 팀 구성하여 해커톤에서 진행할 아이디어를 작성 후, <a className='email' href="mailto: hackathon-manager@lge.com">hackathon-manager@lge.com</a> 메일 전송.&nbsp;<br/>
                            최종 해커톤 참가 팀들은 11/02(수)에 별도 공지 및 해커톤 제공 항목 전달 예정.&nbsp;<br/>
                            우승 팀에게는 소정의 인센티브 지급 예정.&ensp;
                            <Button variant="outlined" size="small" endIcon={<DownloadIcon size='small' />}>
                                신청서 다운로드
                            </Button>     
                        </p>                                           
                    </div>
                </div>
            </div>
            {/* Dialog */}
            <Dialog open={open} onClose={handleClose} className='cloud-developers-day-dialog'>
                <DialogTitle>
                    신청이 완료되었습니다.
                </DialogTitle>
                <DialogContent>                    
                    <DialogContentText>
                        참가 신청 내역은 '마이페이지 &#62; 신청내역'에서 확인 가능합니다. 
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="secondary" variant="contained">확인</Button>
                </DialogActions>
            </Dialog>     
        </header>
    );
  }