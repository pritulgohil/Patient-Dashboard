import React from "react";
import DashboardPrimary from "./DashboardPrimary/DashboardPrimary";
import DashboardSecondary from "./DashboardSecondary/DashboardSecondary";
import PatientList from "./PatientList/PatientList";

const Dashboard = () => {
  return (
    <div>
      <DashboardPrimary />
      <DashboardSecondary />
      <PatientList />
    </div>
  );
};

export default Dashboard;
