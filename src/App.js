import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login.jsx';
import Landingpage from './pages/Landingpage.jsx';
import Daftar from './pages/Daftar.jsx';
import Tentangkami from './pages/Tentangkami.jsx'
import Konsultasi from './pages/Konsultasi.jsx';
import Lprelawan from './pages/Lprelawan';
import Donasi from './pages/Donasi.jsx'
import Dashboardrelawan from './pages/Dashboardrelawan.jsx'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/Tentangkami" element={<Tentangkami />} />
          <Route path='/Konsultasi' element={<Konsultasi />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Daftar" element={<Daftar />} />
          <Route path="/Lprelawan" element={<Lprelawan />} />
          <Route path="/Donasi" element={<Donasi />} />
          <Route path="/Dashboardrelawan" element={<Dashboardrelawan />} />

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
