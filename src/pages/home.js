
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
      <FindPerfectHome/>
      <Review/>
      <p>changed in saravanan</p>
      <p>push in ganesh</p>
    </div>
  );
};

export default Home;
