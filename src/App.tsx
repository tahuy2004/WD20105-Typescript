import { Route, Routes } from "react-router";
import Home from "./components/Home";
import CoreType from "./components/CoreType";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/core-type" element={<CoreType/>} />

      </Routes>
    </>
  );
}

export default App;
