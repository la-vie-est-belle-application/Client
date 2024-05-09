import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "@pages/home/Home";
import ScheduleManage from "@pages/ScheduleManage";
import SignIn from "@pages/signIn/SignIn";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/signin" element={<SignIn />}></Route>
      <Route path="/scheduleManagement" element={<ScheduleManage />} />
    </Routes>
  );
}

export default App;
