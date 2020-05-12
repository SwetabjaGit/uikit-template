import React from 'react';

const Author = () => {
  return ( 
    <div>
      <section className="uk-section uk-section-small">
        <div id="author-wrap" className="uk-container uk-container-small">
          <div className="uk-grid uk-grid-medium uk-flex uk-flex-middle" data-uk-grid>
            <div className="uk-width-auto">
              <img src="https://unsplash.it/80/80/?random" alt="" className="uk-border-circle" />
            </div>
            <div className="uk-width-expand">
              <h4 className="uk-margin-remove uk-text-bold">John Article</h4>
              <span className="uk-text-small uk-text-muted">Ut enim ad minim veniam, quis nostrud exercitation .</span>
            </div>
            <div className="uk-width-auto">
              <div className="uk-inline">
                <a href="#" className="uk-icon-button" data-uk-icon="icon:more-vertical" />
                <div data-uk-dropdown="mode:click; pos: bottom-right; boundary:#author-wrap">
                  <ul className="uk-nav uk-dropdown-nav">
                    <li className="uk-nav-header">Actions</li>
                    <li><a href="#">Rate this author</a></li>
                    <li><a href="#">Follow this author</a></li>
                    <li><a href="#">Bookmark</a></li>
                    <li><a href="#">View more articles</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="uk-container uk-container-small">
			  <hr class="uk-margin-remove" />
		  </div>
    </div>
  );
}
 
export default Author;