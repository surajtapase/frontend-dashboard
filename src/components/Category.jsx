import React, { useState } from "react";
import Widget from "./Widget";
import AddWidgetSidebar from "./AddWidgetSidebar";
import "./Category.css";

const Category = ({ title, categoryId, widgets = [], children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [widgetList, setWidgetList] = useState(widgets);

  const handleAddWidgetClick = () => {
    setIsSidebarOpen(true);
  };

  const handleAddWidget = (widget) => {
    setWidgetList([...widgetList, widget]);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="category">
      <div className="category-header">
        <h2>{title}</h2>
      </div>
      <div className="graph-container">
        {children}
        <div className="add-widget-button" onClick={handleAddWidgetClick}>
          <span className="btn-widget">+ Add Widget</span>
        </div>
      </div>
      <div className="widget-container">
        {widgetList.map((widget, index) => (
          <Widget key={index} title={widget.name} content={widget.content} />
        ))}
      </div>
      <AddWidgetSidebar
        isOpen={isSidebarOpen}
        closeSidebar={closeSidebar}
        onAddWidget={handleAddWidget}
      />
    </div>
  );
};

export default Category;
