import React from "react";

const BottomBar = () => {
  return (
    <div className="bar-bottom">
      <ul className="uk-subnav uk-flex uk-flex-center uk-child-width-1-5" data-uk-grid>
        <li>
          <a href="1" className="uk-icon-link" data-uk-icon="icon: home" title="Home" data-uk-tooltip><span></span></a>
        </li>
        <li>
          <a href="1" className="uk-icon-link" data-uk-icon="icon: settings" title="Settings" data-uk-tooltip><span></span></a>
        </li>
        <li>
          <a href="1" className="uk-icon-link" data-uk-icon="icon: social"  title="Social" data-uk-tooltip><span></span></a>
        </li>
        <li>
          <a href="1" className="uk-icon-link" data-uk-tooltip="Sign out" data-uk-icon="icon: sign-out"><span></span></a>
        </li>
      </ul>
    </div>
  );
};

export default BottomBar;
