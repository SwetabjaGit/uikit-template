import React from 'react';
import Header from './header';
import Corporate from './corporate';
import Personal from './personal';
import Professional from './professional';
import MoreFeatures from './morefeatures';
import Footer from './footer';

const Price = () => {
  return (
    <div>
      <Header />
      <section class="uk-section uk-section-muted uk-padding-remove-bottom">
        <div class="uk-container uk-container-medium">
          <header class="uk-text-center">
            <h1 class="uk-heading-primary">Price</h1>
            <p class="uk-width-3-5 uk-margin-auto">
              Our Product is the easiest way for teams to track their works progress. Our advance plans give you more tools to get the job done.
            </p>
          </header>
          <div class="uk-grid uk-grid-small uk-child-width-1-3@m uk-margin-medium-top uk-grid-match" data-uk-scrollspy="cls: uk-animation-slide-bottom-small; target: > div > .uk-card; delay: 200" data-uk-grid>
            <Personal />
            <Professional />
            <Corporate />
          </div>
          <div class="more-plans uk-text-center uk-text-small uk-text-muted uk-section uk-section-small">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
            <a href="#more" title="More about Plans" data-uk-icon="arrow-down" data-uk-scroll="duration: 400" class="uk-button uk-button-secondary uk-margin-medium-top uk-button-large">MORE ABOUT PLANS</a>
          </div>
        </div>
      </section>
      <MoreFeatures />
      <Footer />
    </div>
  );
};

export default Price;