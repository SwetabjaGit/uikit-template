import React from 'react';

const MoreFeatures = () => {
  return (
    <section id="more" class="uk-section uk-section-default">
      <div class="uk-container">
        <h3 class="uk-text-bold">More Features</h3>
        <div class="uk-overflow-auto">
          <table class="uk-table uk-table-middle uk-table-divider uk-table-large uk-table-justify" data-uk-scrollspy="cls:uk-animation-fade;">
            <thead>
              <tr>
                <th>Features</th>
                <th>Personal</th>
                <th class="uk-background-muted">Professional</th>
                <th>Corporate</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="uk-width-2-5">Incididunt ut labore</td>
                <td class="uk-width-1-5"><span class="uk-text-success" data-uk-icon="icon:check; ratio:2.5"></span></td>
                <td class="uk-width-1-5 uk-background-muted"><span class="uk-text-success" data-uk-icon="icon:check; ratio:2.5"></span></td>
                <td class="uk-width-1-5"><span class="uk-text-success" data-uk-icon="icon:check; ratio:2.5"></span></td>
              </tr>
              <tr>
                <td class="uk-width-2-5">Incididunt ut labore</td>
                <td class="uk-width-1-5"><span class="uk-text-danger" data-uk-icon="icon:close; ratio:2.5"></span></td>
                <td class="uk-width-1-5 uk-background-muted"><span class="uk-text-success" data-uk-icon="icon:check; ratio:2.5"></span></td>
                <td class="uk-width-1-5"><span class="uk-text-success" data-uk-icon="icon:check; ratio:2.5"></span></td>
              </tr>
              <tr>
                <td class="uk-width-2-5">Labore et dolore magna aliqua</td>
                <td class="uk-width-1-5"><span class="uk-text-danger" data-uk-icon="icon:close; ratio:2.5"></span></td>
                <td class="uk-width-1-5 uk-background-muted"><span class="uk-text-danger" data-uk-icon="icon:close; ratio:2.5"></span></td>
                <td class="uk-width-1-5"><span class="uk-text-success" data-uk-icon="icon:check; ratio:2.5"></span></td>
              </tr>
              <tr>
                <td class="uk-width-2-5">Consectetur adipisicing elit, sed do eiusmod incididunt</td>
                <td class="uk-width-1-5"><span class="uk-text-danger" data-uk-icon="icon:close; ratio:2.5"></span></td>
                <td class="uk-width-1-5 uk-background-muted"><span class="uk-text-danger" data-uk-icon="icon:close; ratio:2.5"></span></td>
                <td class="uk-width-1-5"><span class="uk-text-success" data-uk-icon="icon:check; ratio:2.5"></span></td>
              </tr>
              <tr>
                <td class="uk-width-2-5">Labore et dolore magna aliqua</td>
                <td class="uk-width-1-5"><span class="uk-text-danger" data-uk-icon="icon:close; ratio:2.5"></span></td>
                <td class="uk-width-1-5 uk-background-muted"><span class="uk-text-danger" data-uk-icon="icon:close; ratio:2.5"></span></td>
                <td class="uk-width-1-5"><span class="uk-text-success" data-uk-icon="icon:check; ratio:2.5"></span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>     
  );
};

export default MoreFeatures;