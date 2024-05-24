import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Page from "./pages/Page";
import Tes from "./pages/Tes";
import AllProjectCert from "./pages/Project-Certificate/AllProjectCert";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/test" element={<Tes />} />
        <Route path="/proj-cert" element={<AllProjectCert />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
