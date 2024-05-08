import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "@pages/home/Home";
import SignIn from "@pages/SignIn";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/signin" element={<SignIn />}></Route>
    </Routes>
  );
}

export default App;
