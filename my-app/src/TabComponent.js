import React, { useState } from "react";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./App.css";

function TabComponent() {
  const [activeTab, setActiveTab] = useState(null);
  const handleTabClick = (index) => {
    setActiveTab(activeTab === index ? null : index);
  };

  return (
    <div className="tab-container">
      <Tabs>
        <TabList>
          <Tab
            className={`custom-tab-title ${
              activeTab === 0 ? "active-tab" : ""
            }`}
            onClick={() => handleTabClick(0)}
          >
            Tab 1 Title{" "}
          </Tab>{" "}
          <Tab
            className={`custom-tab-title ${
              activeTab === 1 ? "active-tab" : ""
            }`}
            onClick={() => handleTabClick(1)}
          >
            Tab 2 Title{" "}
          </Tab>{" "}
          <Tab
            className={`custom-tab-title ${
              activeTab === 2 ? "active-tab" : ""
            }`}
            onClick={() => handleTabClick(2)}
          >
            Tab 3 Title{" "}
          </Tab>{" "}
        </TabList>{" "}
        {activeTab === 0 && (
          <TabPanel className="custom-tab-panel">
            <h3> Tab 1 </h3> <p>Tab 1 </p>{" "}
          </TabPanel>
        )}{" "}
        {activeTab === 1 && (
          <TabPanel className="custom-tab-panel">
            <h3> Tab 2 </h3> <p>Tab 2 </p>{" "}
          </TabPanel>
        )}{" "}
        {activeTab === 2 && (
          <TabPanel className="custom-tab-panel">
            <h3> Tab 3 </h3> <p>Tab 3 </p>{" "}
          </TabPanel>
        )}{" "}
      </Tabs>{" "}
    </div>
  );
}

export default TabComponent;
