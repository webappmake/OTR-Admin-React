import React from 'react';
import ReactDOM from 'react-dom/client';
import AdminPortal from './AdminPortal';
// import IntellyticsDashboard from './IntellyticsDashboard';
// import CloudDevelopersDay from './view/CloudDevelopersDay';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AdminPortal/>
    {/* <IntellyticsDashboard/> */}
    {/* <CloudDevelopersDay/> */}
  </React.StrictMode>
);