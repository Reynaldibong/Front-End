import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Test from "./components/Test";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import TestPage from "./pages/Tugas";
import CustomHooksPages from "./pages/customhook";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="test" element={<TestPage />}></Route>
        <Route path="custom" element={<CustomHooksPages />}></Route>
      </Routes>
    </>
  );
}

export default App;
