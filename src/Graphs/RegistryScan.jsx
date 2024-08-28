import React from 'react';
import '../Graphs/RegistryScan.css';
import "../components/Dashboard.css"

const RegistryScan = ({ data }) => {
  return (
<>
      <div className="category" >
        <h4>Image Risk Assessment</h4>
        <div className="widget-content" style={{height:'11em',width:"25em"}}>
          <div className="total-count">{data.imageRiskAssessment.totalVulnerabilities}</div>
          <div className="total-text">Total Vulnerabilities</div>
          <div className="risk-bar">
            <div className="bar critical" style={{ width: `${(data.imageRiskAssessment.critical / data.imageRiskAssessment.totalVulnerabilities) * 100}%` }}></div>
            <div className="bar high" style={{ width: `${(data.imageRiskAssessment.high / data.imageRiskAssessment.totalVulnerabilities) * 100}%` }}></div>
            <div className="bar medium" style={{ width: `${(data.imageRiskAssessment.medium / data.imageRiskAssessment.totalVulnerabilities) * 100}%` }}></div>
            <div className="bar low" style={{ width: `${(data.imageRiskAssessment.low / data.imageRiskAssessment.totalVulnerabilities) * 100}%` }}></div>
          </div>
          <div className="risk-labels">
            <span>Critical ({data.imageRiskAssessment.critical})</span>
            <span>High ({data.imageRiskAssessment.high})</span>
            <span>Medium ({data.imageRiskAssessment.medium})</span>
            <span>Low ({data.imageRiskAssessment.low})</span>
          </div>
        </div>
    

     
      </div>
      
      </>
  );
};

export default RegistryScan;
