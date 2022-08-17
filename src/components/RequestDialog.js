import * as React from 'react';
import { 
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText, 
  DialogTitle, 
  FormControlLabel, 
  Checkbox,
} from '@mui/material';

const siteName = [ 'SiteName' ];

export default function RequestDialog(props) { 
  const { onClose, open } = props;

  const handleClose = () => {
    onClose(false);
  };

  return (
    <Dialog open={open} onClose={handleClose} className='common-dialog'>
        <DialogTitle>
            <span>3rd party 음성AI플랫폼 대시보드 사용 요청</span>
        </DialogTitle>
        <DialogContent>
            <DialogContentText>
                <em>{siteName}를 사용하기 위해서는 먼저 사용 요청을 해야 합니다.</em>
                <span className='text-mark'>또한 본 {siteName} 내 모든 정보는 회사 기밀에 해당하므로 사전 서면 승낙 없이<br/> 제3자에게 공개 혹은 누설, 제공이 금지됩니다. 위 내용에 동의하지 않으시면 {siteName} 사용이 불가능함을 알려드립니다.</span>
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
  );
}