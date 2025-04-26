import Carousel from '../Carousel';

const clubItems = [
  {
    label: 'AI',
    content: <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum eos consequatur minima iure praesentium dolor laborum fugit. Harum tenetur eius placeat, consequuntur delectus officiis sit?</div>,
  },
  {
    label: 'Robotics',
    content: <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur quibusdam harum, debitis voluptate animi adipisci, repellendus sint quae cum nostrum exercitationem similique, iusto amet labore.</div>,
  },
  {
    label: 'Debate',
    content: <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam incidunt hic itaque nobis molestias cumque aliquid, quae cum error omnis, corrupti eveniet officiis repudiandae praesentium!</div>,
  },
];

const AboutClubs: React.FC = () => {
    return <Carousel items={clubItems} title="Clubs I'm Part Of" />;
  };
  
  export default AboutClubs;