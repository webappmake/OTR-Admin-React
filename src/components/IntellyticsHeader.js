import * as React from 'react';
import logoSvg from '../assets/img/intellytics-text-logo.svg';
import Link from '@mui/material/Link';

export default function IntellyticsHeader() {
    return (
        <header className='intellytics-header'>
            <h1>
                <Link href="#" color="inherit" underline="none">
                    <img src={logoSvg} alt="Intellytics Dashboard"/>
                </Link>
            </h1>
            <div className='introduction'>
                <h2 className='tit'>Easy to create and manage dashboards.</h2>
                <p className='desc'>
                    It provides access link and registration feature for dashboards through Portal. Various indicators are visualized and provided<br/>
                    in Dashboards which are made in-house, made based on AWS QuickSight, or displayed in conjunction with an external page.<br/>
                    Also, dashboard management, user management, and report management features are provided through Admin page.<br/>
                </p>
            </div>
            <nav className='nav'>
                <Link className='user-info' href="#" color="inherit" underline="none">
                    <span>hyunjung.ryu</span>
                    <span>dxt-scv</span>
                </Link>
                <ul className='link-list'>
                    <li><Link href="#" color="inherit" underline="none">Admin Site</Link></li>
                    <li><Link href="#" color="inherit" underline="none">Newsletter</Link></li>
                    <li><Link href="#" color="inherit" underline="none">FAQ</Link></li>
                    <li><Link href="#" color="inherit" underline="none">Q&amp;A</Link></li>
                </ul>
            </nav>
        </header>
    );
  }
  