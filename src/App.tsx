import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "@pages/home/Home";
import SignIn from "@pages/signIn/SignIn";
import BackGroundBlur from "@components/Modal/BackGroundBlur";
import Notice from "@pages/notice/Notice";
import ScheduleRegister from "@pages/schedule/register/ScheduleRegister";
import ScheduleView from "@pages/schedule/view/ScheduleView";
import useAuthStore from "@stores/auth";
import ScheduleManage from "@pages/schedule/manage/ScheduleManage";

function App() {
  const { isLoggedIn } = useAuthStore();
  return (
    <>
      <BackGroundBlur />
      {!isLoggedIn ? (
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/notice" element={<Notice />} />
          <Route path="/schedule/manage" element={<ScheduleManage />} />
          <Route path="/schedule/register" element={<ScheduleRegister />} />
          <Route
            path="/schedule/search/:date"
            element={<ScheduleView />}
          ></Route>
        </Routes>
      ) : (
        <Routes>
          <Route path="/signin" element={<SignIn />}></Route>
        </Routes>
      )}
    </>
  );
}

export default App;
