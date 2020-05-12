import React from 'react';


const Cover = () => {
  return (  
    <section className="uk-section uk-section-small">
      <div className="uk-container">
        <div className="uk-height-large uk-cover-container uk-border-rounded">
          <img src="https://picsum.photos/1300/500/?random" alt="Alt img" data-uk-cover />
          <div className="uk-overlay uk-overlay-primary uk-position-cover uk-flex uk-flex-center uk-flex-middle uk-light uk-text-center">
            <div data-uk-scrollspy="cls: uk-animation-slide-bottom-small">
              <span style={{letterSpacing: '0.2em', fontSize: '0.725rem'}}>FEATURED ARTICLE</span>
              <h1 className="uk-margin-top uk-margin-small-bottom uk-margin-remove-adjacent">This is a featured blog post</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit dolore magna aliqua.</p>
              <a href="#" className="uk-button uk-button-default uk-margin-top">GO TO ARTICLE</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
 
export default Cover;