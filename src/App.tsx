import PreloadImages from './components/PreloadImages';

import Navbar from './components/Navbar';

import Home from './Home'
import Footer from "./components/Footer";

import CircuitBackground from './components/CircuitBackground';


function App() {
  return (
    <div style={{ width: "100%", minHeight: "100vh" }}>
      <CircuitBackground />
      <PreloadImages />
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
