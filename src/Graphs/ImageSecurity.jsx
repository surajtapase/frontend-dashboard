import React from "react";
import "../Graphs/RegistryScan.css";
import "../components/Dashboard.css";

const ImageSecurity = ({ data }) => {
  return (
    <>
      <div className="category">
        <h4>Image Security Issues</h4>
        <div className="widget-content" style={{height:'11em',width:"25em"}}>
          <div className="total-count">
            {data.imageSecurityIssues.totalImages}
          </div>
          <div className="total-text">Total Images</div>
          <div className="risk-bar">
            <div
              className="bar critical"
              style={{
                width: `${
                  (data.imageSecurityIssues.critical /
                    data.imageSecurityIssues.totalImages) *
                  100
                }%`,
              }}
            ></div>
            <div
              className="bar high"
              style={{
                width: `${
                  (data.imageSecurityIssues.high /
                    data.imageSecurityIssues.totalImages) *
                  100
                }%`,
              }}
            ></div>
            <div
              className="bar medium"
              style={{
                width: `${
                  (data.imageSecurityIssues.medium /
                    data.imageSecurityIssues.totalImages) *
                  100
                }%`,
              }}
            ></div>
            <div
              className="bar low"
              style={{
                width: `${
                  (data.imageSecurityIssues.low /
                    data.imageSecurityIssues.totalImages) *
                  100
                }%`,
              }}
            ></div>
          </div>
          <div className="risk-labels">
            <span>Critical ({data.imageSecurityIssues.critical})</span>
            <span>High ({data.imageSecurityIssues.high})</span>
            <span>Medium ({data.imageSecurityIssues.medium})</span>
            <span>Low ({data.imageSecurityIssues.low})</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default ImageSecurity;
