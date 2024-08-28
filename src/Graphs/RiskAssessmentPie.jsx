import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, Label } from "recharts";
import "../components/Dashboard.css";

const RiskAssessmentPie = ({ data }) => {
  const COLORS = ["#FF0000", "#FFA500", "#C0C0C0", "#008000"];

  const pieData = [
    { name: "Failed", value: data.failed },
    { name: "Warning", value: data.warning },
    { name: "Not Available", value: data.notAvailable },
    { name: "Passed", value: data.passed },
  ];

  const total = data.failed + data.warning + data.notAvailable + data.passed;

  const renderCustomLabel = () => {
    return (
      <text
        x={100}
        y={100}
        textAnchor="middle"
        dominantBaseline="middle"
        style={{ fontSize: "24px", fontWeight: "bold" }}
      >
        {total}
        <tspan x={100} y={120} style={{ fontSize: "16px", fontWeight: "normal" }}>
          Total
        </tspan>
      </text>
    );
  };

  return (
    <div className="category">
      <h5>Cloud Account Risk Assessment</h5>

      <PieChart width={400} height={200}>
        <Pie
          data={pieData}
          cx={100}
          cy={100}
          innerRadius={50}
          outerRadius={85}
          fill="#8884d8"
          dataKey="value"
        >
          {pieData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
          <Label content={renderCustomLabel} position="center" />
        </Pie>
        <Tooltip />
        <Legend layout="vertical" verticalAlign="middle" align="right" />
      </PieChart>
    </div>
  );
};

export default RiskAssessmentPie;
