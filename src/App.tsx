import Navbar from './components/Navbar';
//import Home from './pages/Home'
import Home from './Home'
import Footer from "./components/Footer";

function App() {
  return (
    <div style={{ width: "100%", minHeight: "100vh" }}>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
