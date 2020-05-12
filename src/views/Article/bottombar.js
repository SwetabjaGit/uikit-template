import React from 'react';

const BottomBar = () => {
  return (  
    <div className="uk-section uk-section-xsmall uk-section-default uk-position-bottom uk-position-fixed" style={{borderTop: '1px solid #f2f2f2'}}>
      <div className="uk-container uk-container-small uk-text-small">
        <div className="uk-grid" data-uk-grid>
          <div className="uk-width-expand">
            <a href="1" className="uk-link-reset"><span data-uk-icon="icon: arrow-right" /> <strong>Next article</strong>
              <span className="uk-visible@s">- Vivamus hendrerit tristique tortor vel ultricies</span></a>
          </div>
          <div className="uk-width-auto uk-text-right">
            <a href="1" className="uk-icon-link" data-uk-icon="icon: facebook"><span></span></a>
            <a href="1" className="uk-icon-link" data-uk-icon="icon: twitter"><span></span></a>
            <a href="1" className="uk-icon-link" data-uk-icon="icon: instagram"><span></span></a>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default BottomBar;