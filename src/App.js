import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import Potfolio_form from "./main/js/potfolio_form";

function App() {
  return (
    <>
      <Router basename="/JunPortP">
        <div className="App">
          <Routes>
            <Route path="/" element={<Potfolio_form />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
