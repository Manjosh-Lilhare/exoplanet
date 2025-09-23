import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import InputPage from "./components/InputPage/InputPage";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/input">Predict</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/input" element={<InputPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
