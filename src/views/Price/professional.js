import React from 'react';

const Professional = () => {
  return (
    <div>
            <div class="uk-card uk-card-default uk-card-hover uk-flex uk-flex-column">
              <div class="uk-card-header uk-text-center">
                <h4 class="uk-text-bold">PROFESSIONAL</h4>
              </div>
              <div class="uk-card-body uk-flex-1">
                <div class="uk-flex uk-flex-middle uk-flex-center">
                  <span style={{'font-size': "4rem", 'font-weight': "200", 'line-height': "1em"}}>
                    <span style={{'font-size': "0.5em"}}>$</span>89<small>.99</small>
                  </span>
                </div>
                <div class="uk-text-small uk-text-center uk-text-muted">Per member billed annually</div>
                <ul>
                  <li>10 users included</li>
                  <li>5 GB of storage</li>
                  <li>Email support</li>
                  <li>A beer jar with beer inside!</li>
                </ul>
              </div>
              <div class="uk-card-footer">
                <a href="/" class="uk-button uk-button-primary uk-width-1-1">BUY NOW</a>
              </div>
            </div>
          </div>
  );
};

export default Professional;