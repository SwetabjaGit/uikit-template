import React from 'react';

const DataCard = ({ headText, userFraction, percentage, subject }) => {
  return (
    <div>
		  <span className="uk-text-small">
				<span data-uk-icon="icon:users" className="uk-margin-small-right uk-text-primary"></span>
				{headText}
			</span>
			<h1 className="uk-heading-primary uk-margin-remove  uk-text-primary">{userFraction}</h1>
			<div className="uk-text-small">
				<span className="uk-text-success" data-uk-icon="icon: triangle-up">{percentage}</span>{subject}
			</div>
		</div>
  );
};

export default DataCard;