import AboutClubs from "../components/AboutPage/AboutClubs";
import AboutInterests from "../components/AboutPage/AboutInterests";
import AboutIntro from "../components/AboutPage/AboutIntro";

const About = () => {
  return (
    <>
      <div>
          <AboutIntro />
          <AboutClubs />
          <AboutInterests />
      </div>
    </>
  );
};
  
export default About;