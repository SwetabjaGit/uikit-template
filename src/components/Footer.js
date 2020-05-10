import React from "react";

const Footer = () => {
  return (
    <div id="offcanvas-nav" data-uk-offcanvas="flip: true; overlay: true">
      <div className="uk-offcanvas-bar uk-offcanvas-bar-animation uk-offcanvas-slide">
        <button className="uk-offcanvas-close uk-close uk-icon" type="button" data-uk-close></button>
        <ul className="uk-nav uk-nav-default">
          <li className="uk-active"><a href="1">Active</a></li>
          <li className="uk-parent">
            <a href="1">Parent</a>
            <ul className="uk-nav-sub">
              <li><a href="1">Sub item</a></li>
              <li><a href="1">Sub item</a></li>
            </ul>
          </li>
          <li className="uk-nav-header">Header</li>
          <li><a href="#js-options"><span className="uk-margin-small-right uk-icon" data-uk-icon="icon: table"></span> Item</a></li>
          <li><a href="1"><span className="uk-margin-small-right uk-icon" data-uk-icon="icon: thumbnails"></span> Item</a></li>
          <li className="uk-nav-divider"></li>
          <li><a href="1"><span className="uk-margin-small-right uk-icon" data-uk-icon="icon: trash"></span> Item</a></li>
        </ul>
        <h3>Title</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
    </div>
  );
};

export default Footer;
