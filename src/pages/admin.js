import React from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';

const Admin = () => {
    return (
        <div>
           This is admin page 
        </div>
    );
};

export default Admin;
Admin.getLayout = function getLayout(page){
    return(
        <DashboardLayout>{page}</DashboardLayout>
    )
}