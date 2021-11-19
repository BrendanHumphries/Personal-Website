import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Projects from "./Projects";
import Resume from "./Resume";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;