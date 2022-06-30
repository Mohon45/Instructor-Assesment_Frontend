import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./component/Authentication/Login/Login";
import Register from "./component/Authentication/Register/Register";
import Billings from "./component/Billings/Billings";
import Notify from "./shared/Notify/Notify";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/billing-list" element={<Billings />} />
        <Route path="/registration" element={<Register />} />
      </Routes>
      <Notify />
    </div>
  );
}

export default App;
