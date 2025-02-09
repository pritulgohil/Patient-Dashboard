import Dashboard from "./components/Dashboard/Dashboard";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";

export default function Home() {
  return (
    <>
      <div className="mainContainer">
        <Sidebar />
        <div className="subContainer">
          <Navbar />
          <Dashboard />
        </div>
      </div>
    </>
  );
}
