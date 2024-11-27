import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
function AppRouter() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default AppRouter
