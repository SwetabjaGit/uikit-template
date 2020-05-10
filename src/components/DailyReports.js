import React from "react";

const DailyReports = () => {
  return (
    <div className="left-content-box uk-margin-top">
			<h5>Daily Reports</h5>
			<div>
				<span className="uk-text-small">Traffic <small>(+50)</small></span>
				<progress className="uk-progress" value="50" max="100"></progress>
			</div>
			<div>
				<span className="uk-text-small">Income <small>(+78)</small></span>
				<progress className="uk-progress success" value="78" max="100"></progress>
			</div>
			<div>
				<span className="uk-text-small">Feedback <small>(-12)</small></span>
				<progress className="uk-progress warning" value="12" max="100"></progress>
			</div>
		</div>
  );
};

export default DailyReports;
