import Register from "./components/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SelectLeader from "./components/SelectLeader";
import Test from "./components/Test";
import Reports from "./components/Reports";

function App() {
  const token = "4561235465";
  return (
    <BrowserRouter>
      <Routes>
        ((token) ?{" "}
        <Route
          path="/admin/reports/test/:test_id/leader/:leader_id"
          element={<Reports />}
        />{" "}
        :(
        <Route path="/register/:id" element={<Register />} />
        <Route path="/chose-leader" element={<SelectLeader />} />
        <Route path="/test" element={<Test />} />
        <Route
          path="/finished"
          element={<h1>Muchas gracias sus respuestas han sido guardadas</h1>}
        />
        <Route path="*" element={<h1>Ups, parece que la ruta no existe</h1>} />)
      </Routes>
    </BrowserRouter>
  );
}

export default App;
