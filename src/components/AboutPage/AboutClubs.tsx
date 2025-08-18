import Carousel from '../Carousel/Carousel';
import { CarouselItem } from "../Carousel/types";

//IMAGES
import AIClubImg from '../../assets/AI_club.jpg';
import RoboticsClubImg from '../../assets/Robotics_club_placeholder.jpg';

const clubItems: CarouselItem[] = [
  {
    label: "AI",
    title: "UVic AI Club",
    textContent: (
      <div>
        As part of the AI Club, I’ve worked on small projects that have honed my machine learning skills. Most recently, I developed many models to predict molecule toxicity using the Tox21 dataset, which taught me a lot about handling imbalanced data and experimenting with different techniques in TensorFlow. I also had the opportunity to present this project with my partner at the Canadian Undergraduate Conference on AI (CUCAI), where I gained valuable experience sharing technical work with both peers and industry professionals. It was an incredible way to grow my confidence and communication skills while connecting with the wider AI community.
      </div>
    ),
    imageSrc: <img src={AIClubImg} alt="AI Club" />,
  },
  {
    label: "Robotics",
    title: "UVic Robotics Club",
    textContent: (
      <div>
        Being part of the Robotics Club has allowed me to bridge software and hardware by working directly with robotics systems. I’m currently using the ZED 2i depth camera with ROS to experiment with computer vision, remote control, and 3D data streaming for our competition robot. The club has been a great environment for problem-solving with a team—whether it’s figuring out low-light marker detection, managing code with GitHub, or exploring how robotics and AI intersect in practice. It’s been both a technical challenge and a chance to grow through collaboration.
      </div>),
    imageSrc: <img src={RoboticsClubImg} alt="Robotics Club" width={600} height={400}/>,
  },
];

const AboutClubs: React.FC = () => {
    return <Carousel items={clubItems} />;
  };
  
export default AboutClubs;