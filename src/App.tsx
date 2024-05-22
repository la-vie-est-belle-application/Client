import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "@pages/home/Home";
import ScheduleManage from "@pages/schedule/ScheduleManage";
import SignIn from "@pages/signIn/SignIn";
import BackGroundBlur from "@components/Modal/BackGroundBlur";
import Notice from "@pages/notice/Notice";
import ScheduleRegister from "@pages/schedule/ScheduleRegister";
import ScheduleView from "@pages/schedule/ScheduleView";

function App() {
  return (
    <>
      <BackGroundBlur />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/notice" element={<Notice />} />
        <Route path="/schedule/management" element={<ScheduleManage />} />
        <Route path="/schedule/register" element={<ScheduleRegister />} />
        <Route path="/schedule/view" element={<ScheduleView />} />
      </Routes>
    </>
  );
}

export default App;
