import * as React from 'react';
import footerLogo from '../assets/img/intellytics-footer-logo.svg';
import { 
    FormControl,
    OutlinedInput,
    InputLabel, 
    Select,
    MenuItem
} from '@mui/material';

const names = [
    'English',
    '한국어'
];

export default function AdminFooter() {
    const [language, setLanguage] = React.useState([]);  
    const handleChange = (event) => {
      const {
        target: { value },
      } = event;
      setLanguage(
        typeof value === 'string' ? value.split(',') : value,
      );
    };

    return (
        <footer className='common-footer'>            
            <h3 className='footer-logo'>
                <img src={footerLogo} alt="Intellytics Dashboard"/>
            </h3>   
            <section className='footer-info'>
                <p className='contact'>
                    <em>CONTACT US</em>
                    <span>admin-portal@lge.com</span>
                </p>
                <FormControl sx={{ m: 0, width: 140 }} size="small">
                    <InputLabel id="language">Language</InputLabel>
                    <Select
                        labelId="language"
                        id="language"
                        value={language}
                        onChange={handleChange}
                        input={<OutlinedInput label="Language" />}
                    >
                        {names.map((name) => (
                            <MenuItem key={name} value={name}>{name}</MenuItem>
                        ))}
                    </Select>
                </FormControl>              
            </section>
            <p className='copy'>Copyright &copy; 2022 LG Electronics. All rights reserved.</p>
        </footer>
    );
  }
  