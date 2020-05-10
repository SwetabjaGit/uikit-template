import React from 'react';

const Personal = () => {
  return (
          <div>
            <div class="uk-card uk-card-default uk-card-hover uk-flex uk-flex-column" data-uk-scrollspy-class="uk-animation-slide-left-small">
              <div class="uk-card-header uk-text-center">
                <h4 class="uk-text-bold">PERSONAL</h4>
              </div>
              <div class="uk-card-body uk-flex-1">
                <div class="uk-flex uk-flex-middle uk-flex-center">
                  <span style={{'font-size': "4rem", 'font-weight': "200", 'line-height': "1em"}}>
                    <span style={{'font-size': "0.5em"}}>$</span>9<small>.99</small>
                  </span>
                </div>
                <div class="uk-text-small uk-text-center uk-text-muted">Per member billed annually</div>
                <ul>
                  <li>2 users included</li>
                  <li>1 GB of storage</li>
                  <li>A beer jar</li>
                  
                </ul>
              </div>
              <div class="uk-card-footer">
                <a href="/" class="uk-button uk-button-primary uk-width-1-1">BUY NOW</a>
              </div>
            </div>
          </div>
  );
};

export default Personal;