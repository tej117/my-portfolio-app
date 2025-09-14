import PreloadImages from './components/PreloadImages';

import Navbar from './components/Navbar';

import Home from './Home'
import Footer from "./components/Footer";


function App() {
  return (
    <div style={{ width: "100%", minHeight: "100vh" }}>
      <PreloadImages />
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
