import React from 'react';


const Header = () => {
  return (  
    <header id="header" style={{backgroundColor: '#fff'}} data-uk-sticky="show-on-up: true; animation: uk-animation-fade; media: @l">
        <div className="uk-container">
          <nav id="navbar" data-uk-navbar="mode: click;">
            <div className="uk-navbar-left nav-overlay uk-visible@m">
              <ul className="uk-navbar-nav">
                <li>
                  <a href="#" title="Subscribe">Subscribe</a>
                </li>
                <li>
                  <a href="#" title="Sign Up">Sign Up</a>
                </li>
              </ul>
            </div>
            <div className="uk-navbar-center nav-overlay">
              <a className="uk-navbar-item uk-logo" href="#" title="Logo"><img src="img/n-logo.png" alt="Logo" /></a>
            </div>
            <div className="uk-navbar-right nav-overlay">
              <a className="uk-navbar-toggle uk-visible@m" data-uk-search-icon data-uk-toggle="target: .nav-overlay; animation: uk-animation-fade" href="#" />
              <div className="uk-navbar-item">
                <a className="uk-visible@s" style={{marginRight: '4px'}} href="#" data-uk-icon="facebook" />
                <a className="uk-visible@s" style={{marginRight: '4px'}} href="#" data-uk-icon="twitter" />
                <a className="uk-visible@s" style={{marginRight: '4px'}} href="#" data-uk-icon="instagram" />
                <a className="uk-navbar-toggle uk-hidden@m" data-uk-toggle data-uk-navbar-toggle-icon href="#offcanvas-nav" />
              </div>
            </div>
            <div className="nav-overlay uk-navbar-left uk-flex-1" hidden>
              <div className="uk-navbar-item uk-width-expand">
                <form className="uk-search uk-search-navbar uk-width-1-1">
                  <input className="uk-search-input" type="search" placeholder="Search..." />
                </form>
              </div>
              <a className="uk-navbar-toggle" data-uk-close data-uk-toggle="target: .nav-overlay; animation: uk-animation-fade" href="#" />
            </div>
          </nav>
        </div>
      </header>
  );
}
 
export default Header;