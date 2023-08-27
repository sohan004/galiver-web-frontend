import React from 'react';
import Nav from './components/Nav/Nav';
import HomePage from './components/HomePage/HomePage';
import { Outlet, createBrowserRouter } from 'react-router-dom';

const App = () => {
 
  return (
    <div className='bg-[#F5F5F5] py-[3px]'>
      <Nav></Nav>
      <Outlet></Outlet>
    </div>
  );
};

export default App;