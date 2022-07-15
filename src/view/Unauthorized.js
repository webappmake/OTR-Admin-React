import * as React from 'react';
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar'

export default function Unauthorized() { 
    

    return (
        <div className="contents">
            <PerfectScrollbar className='vertical-scroll-area'>
            Unauthorized
            </PerfectScrollbar>       
        </div>
    );
}