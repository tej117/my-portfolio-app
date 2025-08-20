import HomeCode from '../components/HomePage/HomeCode';
import Background from '../components/Background';

const Home = () => {
    return (
      <>
        <Background
          lineCount={15}
          color="#39A247"
          opacity={0.5}
          circleRadius={3}
        />
        <div>
          <HomeCode />
        </div>
      </>
    );
  };
  
  export default Home;