import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
//import Home from './pages/Home'
import Home from './Home'
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div style={{ width: "100%", minHeight: "100vh" }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
