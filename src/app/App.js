import React from 'react'
import { Navbar, Footer } from './components';
import { BrowserRouter as Router, Route, Routes }from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/about';
import './globals.css';
import './page.modules.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/About' exact element={<About />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App