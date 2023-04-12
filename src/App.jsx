import Register from "./components/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SelectLeader from "./components/SelectLeader";
import Test from "./components/Test";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register/:id" element={<Register />} />
        <Route path="/chose-leader" element={<SelectLeader />} />
        <Route path="/test" element={<Test />} />
        <Route path="*" element={<h1>Ups, parece que la ruta no existe</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
