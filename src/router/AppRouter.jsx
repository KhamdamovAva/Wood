import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Works from '../pages/Works/Works';
import BarnBoard from '../pages/BarnBoard/BarnBoard';
import Contact from '../pages/Contact/Contact'
function AppRouter() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/works' element={<Works />}></Route>
          <Route path='/about-board' element={<BarnBoard />}></Route>
          <Route path='/contacts' element={<Contact />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default AppRouter
