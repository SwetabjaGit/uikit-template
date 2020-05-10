import React from "react";
import DailyReports from './DailyReports';
import BottomBar from './BottomBar';

const Sidebar = () => {
  return (
    <aside id="left-col" className="uk-light uk-visible@m">
			<div className="left-logo uk-flex uk-flex-middle">
				<img className="custom-logo" src="img/dashboard-logo.svg" alt=""/>
			</div>

			<div className="left-content-box  content-box-dark">
				<img src="img/avatar.svg" alt="" className="uk-border-circle profile-img" />
				<h4 className="uk-text-center uk-margin-remove-vertical text-light">John Doe</h4>
				<div className="uk-position-relative uk-text-center uk-display-block">
				  <a href="1" className="uk-text-small uk-text-muted uk-display-block uk-text-center" data-uk-icon="icon: triangle-down; ratio: 0.7">Admin</a>  
				  <div className="uk-dropdown user-drop" data-uk-dropdown="mode: click; pos: bottom-center; animation: uk-animation-slide-bottom-small; duration: 150">
				    <ul className="uk-nav uk-dropdown-nav uk-text-left">
							<li><a href="1"><span data-uk-icon="icon: info"></span> Summary</a></li>
							<li><a href="1"><span data-uk-icon="icon: refresh"></span> Edit</a></li>
							<li><a href="1"><span data-uk-icon="icon: settings"></span> Configuration</a></li>
							<li className="uk-nav-divider"></li>
							<li><a href="1"><span data-uk-icon="icon: image"></span> Your Data</a></li>
							<li className="uk-nav-divider"></li>
							<li><a href="1"><span data-uk-icon="icon: sign-out"></span> Sign Out</a></li>
					  </ul>
				  </div>
				</div>
			</div>
			
			<div className="left-nav-wrap">
        <ul className="uk-nav uk-nav-default uk-nav-parent-icon" data-uk-nav>
					<li className="uk-nav-header">ACTIONS</li>
					<li><a href="1"><span data-uk-icon="icon: comments" className="uk-margin-small-right"></span>Messages</a></li>
					<li><a href="1"><span data-uk-icon="icon: users" className="uk-margin-small-right"></span>Friends</a></li>
					<li className="uk-parent"><a href="1"><span data-uk-icon="icon: thumbnails" className="uk-margin-small-right"></span>Templates</a>
						<ul className="uk-nav-sub">
              {/* <li><a title="Article" href="https://zzseba78.github.io/Kick-Off/article.html">Article</a></li>
							<li><a title="Album" href="https://zzseba78.github.io/Kick-Off/album.html">Album</a></li>
							<li><a title="Cover" href="https://zzseba78.github.io/Kick-Off/cover.html">Cover</a></li>
							<li><a title="Cards" href="https://zzseba78.github.io/Kick-Off/cards.html">Cards</a></li>
							<li><a title="News Blog" href="https://zzseba78.github.io/Kick-Off/newsBlog.html">News Blog</a></li>
							<li><a title="Price" href="https://zzseba78.github.io/Kick-Off/price.html">Price</a></li>
							<li><a title="Login" href="https://zzseba78.github.io/Kick-Off/login.html">Login</a></li>
							<li><a title="Login-Dark" href="https://zzseba78.github.io/Kick-Off/login-dark.html">Login - Dark</a></li> */}
              <li><a title="Article" href="/article">Article</a></li>
							<li><a title="Album" href="/album">Album</a></li>
							<li><a title="Cover" href="/cover">Cover</a></li>
							<li><a title="Cards" href="/cards">Cards</a></li>
							<li><a title="News Blog" href="/newsBlog">News Blog</a></li>
							<li><a title="Price" href="/price">Price</a></li>
							<li><a title="Login" href="/login">Login</a></li>
							<li><a title="Login-Dark" href="/logindark">Login - Dark</a></li>
						</ul>
					</li>
					<li><a href="1"><span data-uk-icon="icon: album" className="uk-margin-small-right"></span>Albums</a></li>
					<li><a href="1"><span data-uk-icon="icon: thumbnails" className="uk-margin-small-right"></span>Featured Content</a></li>
					<li><a href="1"><span data-uk-icon="icon: lifesaver" className="uk-margin-small-right"></span>Tips</a></li>
					<li className="uk-parent">
						<a href="1"><span data-uk-icon="icon: comments" className="uk-margin-small-right"></span>Reports</a>
						<ul className="uk-nav-sub">
							<li><a href="1">Sub item</a></li>
							<li><a href="1">Sub item</a></li>
						</ul>
					</li>
				</ul>
				<DailyReports />
      </div>
      <BottomBar />
		</aside>
  );
};

export default Sidebar;
