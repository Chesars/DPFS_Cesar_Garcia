/* import React, { useContext } from 'react';
import ApiContext from '../context/ApiContext';

const LatestDetailPanel = () => {
    const { latestEntity } = useContext(ApiContext);

    if (!latestEntity) {
        return <div className="loading">Loading...</div>;
    }

    return (
        <div>
            <h2>Latest Detail</h2>
            <div>{latestEntity.name || `${latestEntity.firstName} ${latestEntity.lastName}`}</div>
            <div>{latestEntity.description || latestEntity.email}</div>
        </div>
    );
};

export default LatestDetailPanel; */

import React, { useContext } from 'react';
import ApiContext from '../context/ApiContext';
import '../styles/Dashboard.css';

const LatestDetailPanel = () => {
    const { latestEntity } = useContext(ApiContext);

    return (
        <div className="panel latest-detail-panel">
            <h2><i className="fas fa-info-circle"></i> Latest Product</h2>
            {latestEntity ? (
                <div>
                    <p>Name: {latestEntity.name}</p>
                    <p>Description: {latestEntity.description}</p>
                    <p>Price: ${latestEntity.price}</p>
                    
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default LatestDetailPanel;