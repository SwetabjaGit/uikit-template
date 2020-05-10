import React, { useEffect } from "react";
import StatsCard from './StatsCard';
import DataCard from './DataCard';
import renderCharts from '../utils/chartScripts';

const Content = () => {

  useEffect(() => {
    renderCharts();
  }, []);

  return (
    <div id="content" data-uk-height-viewport="expand: true">
      <div className="uk-container uk-container-expand">
        <div className="uk-grid uk-grid-divider uk-grid-medium uk-child-width-1-2 uk-child-width-1-4@l uk-child-width-1-5@xl" data-uk-grid>
          <DataCard
            headText="New Users"
            userFraction="2.134"
            percentage="15%"
            subject=" more than last week."
          />
          <DataCard
            headText="Social Media"
            userFraction="8.490"
            percentage="-15%"
            subject=" less than last week."
          />
          <DataCard
            headText="Traffic hours"
            userFraction="12.00"
            percentage=" 19%"
            subject=" more than last week."
          />
          <DataCard
            headText="Week Search"
            userFraction="9.543"
            percentage=" -23%"
            subject=" less than last week."
          />
          <div className="uk-visible@l">
            <span className="uk-text-small">
              <span data-uk-icon="icon:users" className="uk-margin-small-right uk-text-primary"></span>
              Lorem ipsum
            </span>
            <h1 className="uk-heading-primary uk-margin-remove uk-text-primary">5.284</h1>
            <div className="uk-text-small">
              <span className="uk-text-success" data-uk-icon="icon: triangle-up"> 7%</span> more than last week.
            </div>
          </div>
        </div>
        <hr/>
        <div className="uk-grid uk-grid-medium" data-uk-grid>
          <StatsCard
            width="uk-width-1-2@l"
            heading="Sales Chart"
            chart="chart2"
          />
          <StatsCard
            width="uk-width-1-2@l"
            heading="Predictions Chart"
            chart="chart1"
          />
          <StatsCard
            width="uk-width-1-1 uk-width-1-3@l uk-width-1-2@xl"
            heading="Activity Chart"
            chart="chart3"
          />
          <StatsCard
            width="uk-width-1-2@s uk-width-1-3@l uk-width-1-4@xl"
            heading="Distribution Chart"
            chart="chart4"
          />
          <StatsCard
            width="uk-width-1-2@s uk-width-1-3@l uk-width-1-4@xl"
            heading="Population Chart"
            chart="chart5"
          />
        </div>
      </div>
    </div>
  );
};

export default Content;
