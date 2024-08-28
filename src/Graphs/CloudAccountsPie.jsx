import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, Label } from "recharts";
import '../components/Dashboard.css';

const CloudAccountsPie = ({ data }) => {
  const COLORS = ["#4e73df", "#cfe5fe"];

  const pieData = [
    { name: "Connected", value: data.connected },
    { name: "Not Connected", value: data.notConnected },
  ];

  const total = data.connected + data.notConnected;

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
      <h5>Cloud Accounts</h5>
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

export default CloudAccountsPie;
