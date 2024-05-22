import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Page from "./pages/Page";
import Tes from "./pages/Tes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/test" element={<Tes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
