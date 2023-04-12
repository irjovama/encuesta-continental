import Register from "./components/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SelectLeader from "./components/SelectLeader";
import Test from "./components/Test";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/chose-leader" element={<SelectLeader />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
