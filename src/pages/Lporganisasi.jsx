import React from 'react'
import Header from '../components/Header';
import Home from "../components/Home";
import Pagerelawan from "../components/Pagerelawan";
import Kegiatan from "../components/Kegiatan";
import Blog from "../components/Blog";
import Keunggulan from "../components/Tanggapan";
import Footer from "../components/Footer";

const Lprelawan = () => {
  return ( 
    <div className="overflow-hidden">
      <Header />
      <Home />
      <Pagerelawan />
      <Kegiatan />
      <Blog />
      <Keunggulan />
      <Footer />
    </div>
  )
}

export default Lprelawan;