import React from 'react';

const StatsCard = ({ width, heading, chart }) => {
  return (
    <div className={width}>
      <div className="uk-card uk-card-default uk-card-small uk-card-hover">
        <div className="uk-card-header">
          <div className="uk-grid uk-grid-small">
            <div className="uk-width-auto"><h4>{heading}</h4></div>
            <div className="uk-width-expand uk-text-right panel-icons">
              <a href="1" className="uk-icon-link" title="Move" data-uk-tooltip data-uk-icon="icon: move"><span></span></a>
              <a href="1" className="uk-icon-link" title="Configuration" data-uk-tooltip data-uk-icon="icon: cog"><span></span></a>
              <a href="1" className="uk-icon-link" title="Close" data-uk-tooltip data-uk-icon="icon: close"><span></span></a>
            </div>
          </div>
        </div>
        <div className="uk-card-body">
          <div className="chart-container">
            <canvas id={chart}></canvas>
          </div>
        </div>
      </div>
    </div>
  )
};

export default StatsCard;