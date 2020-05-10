import React from 'react';

//Components
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Content from "../components/Content";
import Footer from "../components/Footer";

const Dashboard = () => {

  return (
    <div>
      <Header />
      <Sidebar />
      <Content />
      <Footer />
    </div>
  );
}

export default Dashboard;