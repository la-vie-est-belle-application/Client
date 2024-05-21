import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "@pages/home/Home";
import ScheduleManage from "@pages/ScheduleManage";
import SignIn from "@pages/signIn/SignIn";
import BackGroundBlur from "@components/Modal/BackGroundBlur";
import Notice from "@pages/notice/Notice";

function App() {
  return (
    <>
      <BackGroundBlur />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/scheduleManagement" element={<ScheduleManage />} />
        <Route path="/notice" element={<Notice />} />
      </Routes>
    </>
  );
}

export default App;
