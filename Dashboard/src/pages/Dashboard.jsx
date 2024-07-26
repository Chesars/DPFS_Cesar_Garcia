import React from 'react';
import TotalsPanel from '../components/TotalsPanel';
import LatestDetailPanel from '../components/LatestDetailPanel';
import CategoryPanel from '../components/CategoryPanel';
import ProductListPanel from '../components/ProductListPanel';
import Sidebar from '../components/Sidebar';
import CategoryList from '../components/CategoryList';
import '../styles/Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <Sidebar />
            <div className="main-content">
                <header className="header">
                    <h1>Dashboard</h1>
                </header>
                <div className="container">
                    <div className="dashboard">
                        <div className="panel">
                            <TotalsPanel />
                        </div>
                        <div className="panel">
                            <LatestDetailPanel />
                        </div>
                        <div className="panel">
                            <CategoryPanel />
                        </div>
                        <div className="panel">
                            <ProductListPanel />
                        </div>
                         <div className="panel">
                            <CategoryList />
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;