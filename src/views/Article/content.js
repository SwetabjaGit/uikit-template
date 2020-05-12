import React from 'react';
import Gallery from './gallery';
import ContentTop from './contenttop';


const Content = () => {
  return (
    <div>
      <section className="uk-section uk-article">
        <ContentTop />
        <Gallery />
      </section>
    </div>
  );
}
 
export default Content;