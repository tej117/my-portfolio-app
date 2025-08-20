// src/Home.tsx

// Border
import BorderPath from './components/BorderPath';

// Landing Section
import HomeCode from './components/HomePage/HomeCode';
import Background from './components/Background';

// About Section
import AboutIntro from "./components/AboutPage/AboutIntro";

// Experience Section
import Timeline from "./components/ExperiencePage/Timeline";

// Project Section
import Project from "./components/ProjectPage/ProjectView"

const Home = () => {
    return (
      <>
        <BorderPath />
        
        <Background
          lineCount={0}
          color="#39A247"
          opacity={0.5}
          circleRadius={3}
        />
        <div>
            <HomeCode />
        </div>
        <div>
            <AboutIntro />
        </div>
        <div>
            <Timeline />
        </div>
        <div>
            <Project />
        </div>
      </>
    );
  };
  
  export default Home;