import React from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';

const Dashboard = () => {
    return (
        <div>
           dashboard home page
        </div>
    );
};

export default Dashboard;

Dashboard.getLayout = function getLayout(page){
    return(
        <DashboardLayout>{page}</DashboardLayout>
    )
}