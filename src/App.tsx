import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "@pages/home/Home";
import SignIn from "@pages/signIn/SignIn";
import BackGroundBlur from "@components/Modal/BackGroundBlur";
import Notice from "@pages/notice/Notice";
import ScheduleRegister from "@pages/schedule/register/ScheduleRegister";
import ScheduleView from "@pages/schedule/view/ScheduleView";
import ScheduleManage from "@pages/schedule/manage/ScheduleManage";
import NotFound from "@pages/notfound/NotFound";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <>
      <BackGroundBlur />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/*" element={<NotFound />}></Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/notice" element={<Notice />} />
          <Route path="/schedule/manage" element={<ScheduleManage />} />
          <Route path="/schedule/register" element={<ScheduleRegister />} />
          <Route path="/schedule/search" element={<ScheduleView />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
