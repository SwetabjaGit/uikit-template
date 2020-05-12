import React from 'react';
import PropTypes from 'prop-types';

const Header = () => {
  return (
    <header style={{backgroundColor: '#fff', borderBottom: '1px solid #f2f2f2'}} data-uk-sticky="show-on-up: true; animation: uk-animation-slide-top">
      <div className="uk-container">
        <nav id="navbar" data-uk-navbar="mode: click;">
          <div className="uk-navbar-left">
            <ul className="uk-navbar-nav">
              <li>
                <a href="#" data-uk-icon="icon:user" />
                <div className="uk-navbar-dropdown uk-navbar-dropdown-bottom-left">
                  <ul className="uk-nav uk-navbar-dropdown-nav">
                    <li className="uk-nav-header uk-text-small uk-text-primary">YOUR ACCOUNT</li>
                    <li><a href="#"><span data-uk-icon="icon: info" /> Summary</a></li>
                    <li><a href="#"><span data-uk-icon="icon: refresh" /> Edit</a></li>
                    <li><a href="#"><span data-uk-icon="icon: settings" /> Configuration</a></li>
                    <li className="uk-nav-divider" />
                    <li><a href="#"><span data-uk-icon="icon: sign-out" /> Logout</a></li>
                  </ul>
                </div>
              </li>
              <li className="uk-visible@s">
                <div>
                  <a className="uk-navbar-toggle" data-uk-search-icon href="#" />
                  <div className="uk-drop" data-uk-drop="mode: click; pos: right-center; offset: 0; boundary: #navbar">
                    <form action="article.html" className="uk-search uk-search-navbar uk-width-1-1">
                      <input className="uk-search-input" type="search" placeholder="Search..." />
                    </form>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="uk-navbar-center">
            <a className="uk-navbar-item uk-logo" href="#">Logo</a>
          </div>
          <div className="uk-navbar-right">
            <div className="uk-navbar-item">
              <a className="uk-navbar-toggle uk-hidden@m" data-uk-toggle data-uk-navbar-toggle-icon href="#offcanvas-nav" />
              <a href="#" className="uk-button uk-button-default uk-visible@m">PUBLISH</a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
 
export default Header;