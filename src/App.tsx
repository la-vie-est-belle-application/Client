import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "@pages/Home";
import SignIn from "@pages/SignIn";
import ScheduleManage from "@pages/ScheduleManage";
import BackGroundBlur from "@components/ViewSchedule/BackGroundBlur";

function App() {
  return (
    <>
      <BackGroundBlur />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/scheduleManagement" element={<ScheduleManage />} />
      </Routes>
    </>
  );
}

export default App;
