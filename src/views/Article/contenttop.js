import React from 'react';

const ContentTop = () => {
  return (  
    <div>
      <div className="uk-container uk-container-small">
        <h2 className="uk-text-bold uk-h1 uk-margin-remove-adjacent uk-margin-remove-top">Fusce facilisis tempus magna ac dignissim.</h2>
        <p className="uk-article-meta">Written on 12 April 2012. Posted in <a href="#">Blog</a> | <span data-uk-icon="icon: future" /> Takes 7 min reading.</p>
        <p className="uk-text-lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
        <p>UPDATE 24th October 15.10 BST — Vivamus sed consequat urna. Fusce vitae urna sed ante placerat iaculis. Suspendisse potenti. Pellentesque quis fringilla libero. In hac habitasse platea dictumst.</p>
      </div>
        
      <div className="uk-container uk-section">
        <div className="uk-position-relative uk-visible-toggle uk-light" data-uk-slideshow="ratio: 7:3; animation: push; min-height: 270; velocity: 3">
          <ul className="uk-slideshow-items">
            <li>
              <img data-src="https://picsum.photos/1200/550/?random=1" data-uk-img="target: !.uk-slideshow-items" alt="" data-uk-cover />
              <div className="uk-position-bottom uk-position-medium uk-text-center uk-light">
                <h3 className="uk-margin-remove">Sed consequat urna.</h3>
                <p className="uk-margin-remove uk-visible@s">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </li>
            <li>
              <img data-src="https://picsum.photos/1200/550/?random=2" data-uk-img="target: !.uk-slideshow-items" alt="" data-uk-cover />
              <div className="uk-position-bottom uk-position-medium uk-text-center uk-light">
                <h3 className="uk-margin-remove">Sed consequat urna.</h3>
                <p className="uk-margin-remove uk-visible@s">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </li>
            <li>
              <img data-src="https://picsum.photos/1200/550/?random=3" data-uk-img="target: !.uk-slideshow-items" alt="" data-uk-cover />
              <div className="uk-position-bottom uk-position-medium uk-text-center uk-light">
                <h3 className="uk-margin-remove">Sed consequat urna.</h3>
                <p className="uk-margin-remove uk-visible@s">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </li>
          </ul>
          <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" data-uk-slidenav-previous="ratio: 1.5" data-uk-slideshow-item="previous" />
          <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" data-uk-slidenav-next="ratio: 1.5" data-uk-slideshow-item="next" />
        </div>
      </div>

      <div className="uk-container uk-container-small">
        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
        <blockquote cite="#">
          <p className="uk-margin-small-bottom">The blockquote element represents content that is quoted from another source, optionally with a citation which must be within a footer or cite element.</p>
          <footer>Someone famous in <cite><a href="#">Source Title</a></cite></footer>
        </blockquote>
        <h3>Aenean ultricies mi vitae est.</h3>
        <p>Nulla facilisi. Mauris euismod metus eu augue dictum luctus. Aliquam tellus mi, venenatis sit amet laoreet non, laoreet sit amet dolor. Mauris feugiat sem sit amet tortor tristique, eu varius risus accumsan. Nullam tincidunt erat sed turpis suscipit, in lacinia mi venenatis. Proin in dui sed neque malesuada dictum vitae vitae elit. I</p>
        <ul>
          <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
          <li>Aliquam tincidunt mauris eu risus.</li>
          <li>Vestibulum auctor dapibus neque.</li>
        </ul>
        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
      </div>
    </div>
  );
}
 
export default ContentTop;