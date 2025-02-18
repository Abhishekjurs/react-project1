import React from "react";
import { Bar } from "react-chartjs-2";

const Dashboard = () => {
  const data = {
    labels: ["Users", "Posts", "Comments"],
    datasets: [{ label: "Activity", data: [10, 20, 30] }],
  };

  return <Bar data={data} />;
};

export default Dashboard;
