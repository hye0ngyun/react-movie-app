import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import Detail from "./Routes/Detail";
import Home from "./Routes/Home";

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
