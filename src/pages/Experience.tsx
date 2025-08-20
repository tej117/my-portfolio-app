import { useEffect } from "react";
import style from "../styles/Other/SnapScrolling.module.css";
import Skills from "../components/ExperiencePage/Skills";
import Timeline from "../components/ExperiencePage/Timeline";
import { setupCustomScrollSnap } from "../scripts/ScrollSnap";

const Experience = () => {

  useEffect(() => {
    setupCustomScrollSnap(`.${style.scrollAreaProx}`, `.${style.snapSection}`, 1)
  }, []);

  return (
    <div className={style.page}>
      <div className={style.scrollAreaProx}>
        <div className={style.snapSection}>
          <Skills />
        </div>
        <div className={style.snapSection}>
          <Timeline />
        </div>
      </div>
    </div>
  );
};
  
  export default Experience;
  