import * as React from 'react';
import logoSvg from '../assets/img/admin-text-logo.svg';
import Link from '@mui/material/Link';

export default function AdminHeader() {
    return (
        <header className='common-header'>
            <h1>
                <Link href="#" color="inherit" underline="none">
                    <img className='admin-portal-logo' src={logoSvg} alt="Admin Portal"/>
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
                {/* <Link className='user-info' href="#" color="inherit" underline="none">
                    <span>hyunjung.ryu</span>
                    <span>dxt-scv</span>
                </Link> */}                
                <ul className='link-list only'> {/* .user-info를 사용하지 않을 경우, .link-list에 .only를 이중클래스로 사용 */}
                    <li><Link href="https://intellytics-dashboard.lge.com" color="inherit" underline="none">intellytics Portal</Link></li>
                </ul>
            </nav>
        </header>
    );
  }
  