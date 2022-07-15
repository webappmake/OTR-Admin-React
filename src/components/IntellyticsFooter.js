import * as React from 'react';
import footerLogo from '../assets/img/intellytics-footer-logo.svg';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';

const names = [
    'English',
    '한국어'
];

export default function IntellyticsFooter() {
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
        <footer className='intellytics-footer'>            
            <h3 className='footer-logo'>
                <img src={footerLogo} alt="Intellytics Dashboard"/>
            </h3>   
            <section className='footer-info'>
                <p className='contact'>
                    <em>CONTACT US</em>
                    <span>plada-admin-op@lge.com</span>
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
  