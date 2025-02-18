import React from "react";
import DashboardPrimary from "./DashboardPrimary/DashboardPrimary";
import DashboardSecondary from "./DashboardSecondary/DashboardSecondary";
import PatientList from "./PatientList/PatientList";
import Appointments from "../Appointments/Appointments";
import Medical from "../Medical/Medical";
import Prescriptions from "../Prescriptions/Prescriptions";
import Payments from "../Payments/Payments";

const Dashboard = () => {
  return (
    <div>
      <DashboardPrimary />
      <DashboardSecondary />
      <PatientList />
      <Appointments />
      <Medical />
      <Prescriptions />
      <Payments />
    </div>
  );
};

export default Dashboard;
