import React from "react";
import Category from "./Category";
import CloudAccountsPie from "../Graphs/CloudAccountsPie";
import RiskAssessmentPie from "../Graphs/RiskAssessmentPie";
import TopNamespaceAlertsBar from "../Graphs/TopNamespaceAlertsBar";
import WorkloadAlertsBar from "../Graphs/WorkloadAlertsBar";
import data from "../data.json";
import RegistryScan from "../Graphs/RegistryScan";
import ImageSecurity from "../Graphs/ImageSecurity";
import "./Dashboard.css";
import Subheader from '../components/Subheader'

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Subheader/>
      <div className="heading">CSPM Executive Dashboard:</div>

      <Category widgets={data.CSPM.widgets}>
        <CloudAccountsPie data={data.CSPM.cloudAccounts} />
        <RiskAssessmentPie data={data.CSPM.cloudAccountRiskAssessment} />
      </Category>

      <div className="heading">CWPP Dashboard:</div>
      <Category widgets={data.CWPP.widgets}>
        <TopNamespaceAlertsBar data={data.CWPP.topNamespaceAlerts} />
        <WorkloadAlertsBar data={data.CWPP.workloadAlerts} />
      </Category>

      <div className="heading">Registry Scan:</div>
      <Category widgets={data.RegistryScan.widgets}>
        <RegistryScan data={data.RegistryScan} /> 
        <ImageSecurity data={data.RegistryScan}/>
      </Category>

    </div>
  );
};

export default Dashboard;
