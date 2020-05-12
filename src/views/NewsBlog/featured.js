import React from 'react';


const Featured = () => {
  return (  
      <div className="uk-container">
        <h4 className="uk-heading-line uk-text-bold"><span>Featured</span></h4>
        <div data-uk-slider="velocity: 5">
          <div className="uk-position-relative">
            <div className="uk-slider-container">
              <ul className="uk-slider-items uk-child-width-1-2@m uk-grid uk-grid-medium news-slide">
                <li>
                  <div className="uk-card uk-card-default uk-card-body uk-card-small uk-flex uk-flex-middle uk-card-default uk-border-rounded">
                    <div className="uk-grid uk-grid-medium uk-flex uk-flex-middle" data-uk-grid>
                      <div className="uk-width-1-3@s uk-width-2-5@m uk-height-1-1">
                        <img src="https://picsum.photos/500/500/?random=1" alt="" />
                      </div>
                      <div className="uk-width-2-3@s uk-width-3-5@m">
                        <span className="uk-label uk-label-warning" style={{fontSize: '0.75rem'}}>Trends</span>
                        <h3 className="uk-card-title uk-margin-small-top uk-margin-remove-bottom">
                          <a className="uk-link-reset" href="#">Short Blog Title</a>
                        </h3>
                        <span className="uk-article-meta">Published 12th August 2019</span>
                        <p className="uk-margin-small">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do...</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="uk-card uk-card-default uk-card-body uk-card-small uk-flex uk-flex-middle uk-card-default uk-border-rounded">
                    <div className="uk-grid uk-grid-medium uk-flex uk-flex-middle" data-uk-grid>
                      <div className="uk-width-1-3@s uk-width-2-5@m uk-height-1-1">
                        <img src="https://picsum.photos/500/500/?random=2" alt="" />
                      </div>
                      <div className="uk-width-2-3@s uk-width-3-5@m">
                        <span className="uk-label uk-label-warning" style={{fontSize: '0.75rem'}}>Trends</span>
                        <h3 className="uk-card-title uk-margin-small-top uk-margin-remove-bottom">
                          <a className="uk-link-reset" href="#">Short Blog Title</a>
                        </h3>
                        <span className="uk-article-meta">Published 12th August 2019</span>
                        <p className="uk-margin-small">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do...</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="uk-card uk-card-default uk-card-body uk-card-small uk-flex uk-flex-middle uk-card-default uk-border-rounded">
                    <div className="uk-grid uk-grid-medium uk-flex uk-flex-middle" data-uk-grid>
                      <div className="uk-width-1-3@s uk-width-2-5@m uk-height-1-1">
                        <img src="https://picsum.photos/500/500/?random=3" alt="" />
                      </div>
                      <div className="uk-width-2-3@s uk-width-3-5@m">
                        <span className="uk-label uk-label-warning" style={{fontSize: '0.75rem'}}>Trends</span>
                        <h3 className="uk-card-title uk-margin-small-top uk-margin-remove-bottom">
                          <a className="uk-link-reset" href="#">Short Blog Title</a>
                        </h3>
                        <span className="uk-article-meta">Published 12th August 2019</span>
                        <p className="uk-margin-small">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do...</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="uk-card uk-card-default uk-card-body uk-card-small uk-flex uk-flex-middle uk-card-default uk-border-rounded">
                    <div className="uk-grid uk-grid-medium uk-flex uk-flex-middle" data-uk-grid>
                      <div className="uk-width-1-3@s uk-width-2-5@m uk-height-1-1">
                        <img src="https://picsum.photos/500/500/?random=4" alt="" />
                      </div>
                      <div className="uk-width-2-3@s uk-width-3-5@m">
                        <span className="uk-label uk-label-warning" style={{fontSize: '0.75rem'}}>Trends</span>
                        <h3 className="uk-card-title uk-margin-small-top uk-margin-remove-bottom">
                          <a className="uk-link-reset" href="#">Short Blog Title</a>
                        </h3>
                        <span className="uk-article-meta">Published 12th August 2019</span>
                        <p className="uk-margin-small">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do...</p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="uk-hidden@l uk-light">
              <a className="uk-position-center-left uk-position-small" href="#" data-uk-slidenav-previous data-uk-slider-item="previous" />
              <a className="uk-position-center-right uk-position-small" href="#" data-uk-slidenav-next data-uk-slider-item="next" />
            </div>
            <div className="uk-visible@l">
              <a className="uk-position-center-left-out uk-position-small" href="#" data-uk-slidenav-previous data-uk-slider-item="previous" />
              <a className="uk-position-center-right-out uk-position-small" href="#" data-uk-slidenav-next data-uk-slider-item="next" />
            </div>
          </div>
          <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin"><li /></ul>
        </div>
      </div>
  );
}
 
export default Featured;