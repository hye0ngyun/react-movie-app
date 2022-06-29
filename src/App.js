import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Header from "./Components/Header";
import Detail from "./Routes/Detail";
import Home from "./Routes/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
