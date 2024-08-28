import React, { useState } from 'react';
import './AddWidgetSidebar.css';

const AddWidgetSidebar = ({ isOpen, closeSidebar, onAddWidget }) => {
    const [selectedWidgets, setSelectedWidgets] = useState([]);
    const [activeTab, setActiveTab] = useState('CSPM'); 

    const handleWidgetChange = (widgetName) => {
        setSelectedWidgets(prev =>
            prev.includes(widgetName)
                ? prev.filter(w => w !== widgetName)
                : [...prev, widgetName]
        );
    };

    const handleAddWidget = () => {
        onAddWidget(selectedWidgets.map(name => ({ name, content: '' })));
        setSelectedWidgets([]);
        closeSidebar();
    };

    return (
        <div className={`add-widget-sidebar ${isOpen ? 'open' : ''}`}>
            <div className="sidebar-header">
                <h2>Add Widget</h2>
                <button className="close-button" onClick={closeSidebar}>X</button>
            </div>
            <div className="sidebar-tabs">
                {['CSPM', 'CWPP', 'Image', 'Ticket'].map(tab => (
                    <button
                        key={tab}
                        className={`tab-button ${activeTab === tab ? 'active' : ''}`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>
            <div className="sidebar-content">
                {activeTab === 'CSPM' && (
                    <>
                        <label className="checkbox-container">
                            Cloud Accounts
                            <input
                                type="checkbox"
                                checked={selectedWidgets.includes('Cloud Accounts')}
                                onChange={() => handleWidgetChange('Cloud Accounts')}
                            />
                            <span className="checkmark"></span>
                        </label>
                        <label className="checkbox-container">
                            Cloud Account Risk Assessment
                            <input
                                type="checkbox"
                                checked={selectedWidgets.includes('Cloud Account Risk Assessment')}
                                onChange={() => handleWidgetChange('Cloud Account Risk Assessment')}
                            />
                            <span className="checkmark"></span>
                        </label>
                    </>
                )}
            </div>
            <div className="sidebar-actions">
                <button className="cancel-button" onClick={closeSidebar}>Cancel</button>
                <button className="confirm-button" onClick={handleAddWidget}>Confirm</button>
            </div>
        </div>
    );
};

export default AddWidgetSidebar;
