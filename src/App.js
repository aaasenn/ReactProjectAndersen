import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';

const App = () => {
  return (
    <div className='wrapper'>
      <Header />
      <div className='content'>
        <Routes>
          <Route path='/home' element={<Home />} />
        </Routes>
      </div>
    </div>
  )
}
export default App;
