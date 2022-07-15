import * as React from 'react';
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar'

export default function Declined() { 
    

    return (
        <div className="contents">
            <PerfectScrollbar className='vertical-scroll-area'>
            Declined
            </PerfectScrollbar>       
        </div>
    );
}