import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';

function App() {
  return (
    <>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
        </Routes>
        <Footer />
    </>
  )
}

export default App;
