import React, { useContext } from 'react';
import ApiContext from '../context/ApiContext';
import '../styles/Dashboard.css'; // Ensure you have the styles imported

const TotalsPanel = () => {
    const { users, products } = useContext(ApiContext);

    return (
        <div className="panel totals-panel">
            <h2><i className="fas fa-chart-bar"></i> Totals</h2>
            <div>Total Users: {users.length}</div>
            <div>Total Products: {products.length}</div>
        </div>
    );
};

export default TotalsPanel;