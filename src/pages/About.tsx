import AboutClubs from "../components/AboutPage/AboutClubs";
import AboutInterests from "../components/AboutPage/AboutInterests";
import AboutSection from "../components/AboutPage/AboutSection";

const About = () => {
  return (
    <>
      <div>
          <AboutSection />
          <AboutClubs />
          <AboutInterests />
      </div>
    </>
  );
};
  
export default About;