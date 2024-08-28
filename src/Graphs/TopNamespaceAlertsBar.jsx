import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import '../components/Dashboard.css';

const TopNamespaceAlertsBar = ({ data }) => {
  return (
    <div className="category">
      <BarChart width={400} height={260} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="alerts" fill="#82ca9d" />
      </BarChart>
    </div>
  );
};

export default TopNamespaceAlertsBar;
