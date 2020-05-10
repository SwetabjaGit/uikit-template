import React from 'react';

const Corporate = () => {
  return (
          <div>
            <div class="uk-card uk-card-default uk-flex uk-card-hover uk-flex-column" data-uk-scrollspy-class="uk-animation-slide-right-small">
              <div class="uk-card-header uk-text-center">
                <h4 class="uk-text-bold">CORPORATE</h4>
              </div>
              <div class="uk-card-body uk-flex-1">
                <div class="uk-flex uk-flex-middle uk-flex-center">
                  <span style={{'font-size': "4rem", 'font-weight': "200", 'line-height': "1em"}}>
                    <span style={{'font-size': "0.5em"}}>$</span>299
                  </span>
                </div>
                <div class="uk-text-small uk-text-center uk-text-muted">Per member billed annually</div>
                <ul>
                  <li>Unlimited users</li>
                  <li>Unlimited storage</li>
                  <li>Email support</li>
                  <li>Help center access</li>
                </ul>
              </div>
              <div class="uk-card-footer">
                <a href="/" class="uk-button uk-button-primary uk-width-1-1">BUY NOW</a>
              </div>
            </div>
          </div>        
  );
};

export default Corporate;