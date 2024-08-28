import React from 'react';
import './Widget.css';

const Widget = ({ title }) => {
    return (
        <div className="widget">
            <h3>{title}</h3>
            <div className="widget-content">
                
                <p>No graph data available!</p>
            </div>
        </div>
    );
};

export default Widget;
