import React from 'react'
import Navbar from '../components/Navbar';
import Dashboardrel from '../components/Dashboardrel'
import Footer from "../components/Footer";

const Dashboard = () => {
  return ( 
    <div className="overflow-hidden">
      <Navbar />
      <Dashboardrel />
      <Footer />
    </div>
  )
}

export default Dashboard;