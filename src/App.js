import React from 'react'
import Navbar from './components/Navbar';
import {Routes,Route,Link} from 'react-router-dom';
import Hero from './components/Hero';
import UserInfo from './components/UserInfo';

const App = () => {
  return (
    <div>
    
      <Navbar/>
      <Hero/>
      <Routes>
      <Route path='/hero' element={<Hero/>}/>
      
      <Route path='/userinfo' element={<UserInfo/>}/>
      </Routes> 
     
    </div>
  )
}

export default App;