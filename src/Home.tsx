// src/Home.tsx

import React, { useState, useRef } from 'react';

// Border
import BorderPath from './components/BorderPath';

// Circuit Path
import CircuitPath from './components/CircuitPath/CircuitPath';
import { createLandingToResumeSegment, createLandingToAboutSegment } from './components/CircuitPath/PathData';

// Landing Section
import HomeCode from './components/HomePage/HomeCode';
import Background from './components/Background';

// About Section
import AboutSection from "./components/AboutPage/AboutSection";

// Experience Section
import Timeline from "./components/ExperiencePage/Timeline";

// Project Section
import Project from "./components/ProjectPage/ProjectView"

const Home = () => {
    const [showPath, setShowPath] = useState(false);
    const resumeRef = useRef<HTMLDivElement>(null);

    const [landingAnchorRefs, setLandingAnchorRefs] = useState<React.RefObject<HTMLDivElement | null>[]>([]);

    const [aboutAnchorRefs, setAboutAnchorRefs] = useState<React.RefObject<HTMLDivElement | null>[]>([]);

    const combinedRefs = [...landingAnchorRefs, ...aboutAnchorRefs];

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
              <AboutSection
                onAnchorsReady={refs => setAboutAnchorRefs(refs)}
              />
          </div>

          <div>
              <Timeline />
          </div>
          <div>
              <Project />
          </div>
        </div>

      </>
    );
  };
  
  export default Home;