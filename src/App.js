import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/home'
import Swipper from "./Component/swipper";
import WorkWithUs from './Component/WorkWithUs'
import Main from './Component/main'
import FindPerfectHome from './Component/FindPerfectHome'
import FeaturedProperties from './Component/FeaturedProperties'
import BackGroundImg from './Component/BackGroundImg'
import Layout from './Component/layout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<><Layout /></>} >
        <Route index element={<Home/>}/>
        <Route path='/swipper' element={<Swipper />} />
        <Route path='/workwithus' element={<WorkWithUs />} />
        <Route path='/main' element={<Main />} />
        <Route path='/findperfect' element={<FindPerfectHome />} />
        <Route path='/featuredproperties' element={<FeaturedProperties />} />
        <Route path='/backgroundimg' element={<BackGroundImg />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
