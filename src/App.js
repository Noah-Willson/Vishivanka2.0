
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Common/Header/Navbar';
import HomePage from './Components/HomePage/HomePage';
import Footer from './Components/Common/Footer/Footer';
import Items from './Components/AboutPage/Items/Items';


function App() {
  return (
    <Router>
       <Navbar/>

      <div>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/items" element={<Items />} />
        </Routes>

      </div>
      <Footer />
    </Router>
  );
}

export default App;