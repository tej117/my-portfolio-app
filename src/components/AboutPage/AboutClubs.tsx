import Carousel from '../Carousel/Carousel';
import { CarouselItem } from "../Carousel/types";

const clubItems: CarouselItem[] = [
  {
    label: "AI",
    title: "UVic AI Club",
    textContent: (
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eos
        consequatur minima iure praesentium dolor laborum fugit.
      </div>
    ),
    imageSrc: <img src="/ai-club.jpg" alt="AI Club" />,
  },
  {
    label: "Robotics",
    title: "UVic Robotics Club",
    textContent: <div>Robotics club description goes here.</div>,
    imageSrc: <img src="/robotics.jpg" alt="Robotics Club" />,
  },
];

const AboutClubs: React.FC = () => {
    return <Carousel items={clubItems} />;
  };
  
export default AboutClubs;