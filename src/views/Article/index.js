import React from 'react';

// Components
import Header from './header';
import Author from './author';
import Content from './content';
import MoreStories from './morestories';
import Footer from './footer';
import BottomBar from './bottombar';

const Article = () => {
  return (
    <div>
      <Header />
      <Author />
      <Content />
      <MoreStories />
      <Footer />
      <BottomBar />
    </div>
  );
};

export default Article;