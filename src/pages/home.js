
import WorkWithUs from "../Component/WorkWithUs";
import BackGroundImg from "../Component/BackGroundImg";
import FeaturedProperties from "../Component/FeaturedProperties";
import Swipper from "../Component/swipper";
import FindPerfectHome from '../Component/FindPerfectHome'
import Review from '../Component/review'


const Home = () => {
  return (
    <div style={{ position: "relative" }}>
      <BackGroundImg />
      <WorkWithUs />
      <FeaturedProperties />
      <Swipper />
      <FindPerfectHome />
      <Review />
    </div>
  );
};

export default Home;
