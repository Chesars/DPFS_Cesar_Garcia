import React from 'react';
import '../styles/Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div>
                <h2 className="logo">SITELOGO</h2>
                <div className="separator"></div>
                <h2>Navigation</h2>
                <ul>
                    <li><a href="#totals"><i className="fas fa-chart-bar"></i> Totals</a></li>
                    <li><a href="#latest"><i className="fas fa-info-circle"></i> Latest Detail</a></li>
                    <li><a href="#categories"><i className="fas fa-tags"></i> Categories</a></li>
                    <li><a href="#product-list"><i className="fas fa-boxes"></i> Product List</a></li>
                </ul>
            </div>
            <div className="footer">
                © 2024 sitelogo Inc.
            </div>
        </div>
    );
};

export default Sidebar;