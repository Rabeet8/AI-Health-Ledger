import React from 'react';
import Navbar from './components/Navbar';
import { Routes, Route , useLocation} from 'react-router-dom';
import Hero from './components/Hero';
import UserInfo from './components/UserInfo';
import GptInterface from './components/GptInterface';
import Feedback from './components/feedback';

const App = () => {
  const location = useLocation();
  const { name } = location.state || { name: '' };
  return (
    <div>
      <Navbar />
      {/* <Hero/> */}

      <Routes>
        <Route path='/hero' element={<Hero />} />
        <Route path='/userinfo' element={<UserInfo />} />
        <Route path='/gptInterface' element={<GptInterface name={name} />} />
        <Route path = '/feedback' element={<Feedback/>}/>

      </Routes>
    </div>
  );
};

export default App;
