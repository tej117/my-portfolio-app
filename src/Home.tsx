// src/Home.tsx

// Landing Section
import HomeCode from './components/HomeSection/HomeCode';

// About Section
import AboutSection from "./components/AboutSection/AboutSection";

// Skills Section
import SkillsSection from "./components/SkillSection/SkillSection";

// Experience Section
import ExperienceSection from "./components/ExperienceSection/ExperienceSection";

// Project Section
import Project from "./components/ProjectSection/ProjectSection"

const Home = () => {
    return (
      <>
        <div style={{ position: 'relative' }}>
          <div>
            <HomeCode/>
          </div>

          <div>
            <section id="about">
              <AboutSection/>
            </section>
          </div>

          <div>
            <section id="skills">
              <SkillsSection/>
            </section>
          </div>

          <div>
            <section id="experience">
              <ExperienceSection/>
            </section>
          </div>
          <div>
            <section id="projects">
              <Project />
            </section>
          </div>
        </div>

      </>
    );
  };
  
  export default Home;