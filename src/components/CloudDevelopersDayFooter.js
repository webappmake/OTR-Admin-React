import * as React from 'react';
import footerLogo from '../assets/img/lg-footer-logo.svg';

export default function CloudDevelopersDayFooter() {
    return (
        <footer className='cloud-developers-day-footer'>
            <h3 className='footer-logo'>
                <img src={footerLogo} alt="LG"/>
            </h3>   
            <section className='footer-info'>
                <p className='contact'>
                    <em>CONTACT US</em>
                    <span>plada-admin-op@lge.com</span>
                </p>            
            </section>
            <p className='copy'>Copyright &copy; 2022 LG Electronics. All rights reserved.</p>
        </footer>
    );
  }
  