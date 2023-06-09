import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import { AuthContextProvider } from './Context/AuthContext';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
function App() {
  return (
    <>
    <AuthContextProvider>
    <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
        </Routes>
        <Footer />
    </AuthContextProvider>
        
    </>
  )
}

export default App;
