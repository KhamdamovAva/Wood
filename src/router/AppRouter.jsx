import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Works from '../pages/Works/Works';
function AppRouter() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='works' element={<Works />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default AppRouter
