import React from 'react';

// Components
import Header from './header';
import Navbar from './navbar';
import Cover from './cover';
import Featured from './featured';
import Content from './content';
import Footer from './footer';


const NewsBlog = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Cover />
      <Featured />
      <Content />
      <Footer />
    </div>
  );
};

export default NewsBlog;