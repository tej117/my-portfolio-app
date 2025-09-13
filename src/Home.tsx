// src/Home.tsx

import React, { useState, useRef } from 'react';

// Border
import BorderPath from './components/BorderPath';

// Circuit Path
import CircuitPath from './components/CircuitPath/CircuitPath';
import { createLandingToResumeSegment } from './components/CircuitPath/PathData';

// Landing Section
import HomeCode from './components/HomeSection/HomeCode';

// About Section
import AboutSection from "./components/AboutSection/AboutSection";

// Experience Section
import ExperienceSection from "./components/ExperienceSection/ExperienceSection";

// Project Section
import Project from "./components/ProjectSection/ProjectSection"

const Home = () => {
    const [showPath, setShowPath] = useState(false);
    const resumeRef = useRef<HTMLDivElement>(null);

    const [landingAnchorRefs, setLandingAnchorRefs] = useState<React.RefObject<HTMLDivElement | null>[]>([]);

    const [aboutAnchorRefs, setAboutAnchorRefs] = useState<React.RefObject<HTMLDivElement | null>[]>([]);

    const [experienceAnchorRefs, setExperienceAnchorRefs] = useState<React.RefObject<HTMLDivElement | null>[]>([]);

    const combinedRefs = [...landingAnchorRefs, ...aboutAnchorRefs, ...experienceAnchorRefs];

    const fullSegment = createLandingToResumeSegment(resumeRef, combinedRefs, 83);

    return (
      <>
        <div style={{ position: 'relative' }}>
          <BorderPath />
          
          <div>
            <HomeCode
              onShowPath={() => setShowPath(true)}
              resumeRef={resumeRef}
              onAnchorsReady={refs => setLandingAnchorRefs(refs)}
            />
          </div>

          {showPath && <CircuitPath isActive={showPath} segment={fullSegment} />}

          <div>
            <section id="about">
              <AboutSection
                onAnchorsReady={refs => setAboutAnchorRefs(refs)}
              />
            </section>
          </div>

          <div>
            <section id="experience">
              <ExperienceSection
                onAnchorsReady={refs => setExperienceAnchorRefs(refs)}
              />
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