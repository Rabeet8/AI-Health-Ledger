import React from 'react';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import UserInfo from './components/UserInfo';
import GptInterface from './components/GptInterface';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/userinfo' element={<UserInfo />} />
        <Route path='/gptinterface' element={<GptInterface />} />
      </Routes>
    </div>
  );
};

export default App;
