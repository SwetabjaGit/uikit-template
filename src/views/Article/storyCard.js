import React from 'react';


const StoryCard = ({ imageSrc, avatar, author, date, title, text }) => {
  return (
    <li>
      <div>
        <div className="uk-card uk-card-default uk-card-small" style={{boxShadow: 'none'}}>
          <div className="uk-card-media-top">
            <a href="#">
              <img data-src={imageSrc} width={620} height={350} data-uk-img="target: !.uk-slideshow-items" alt="" />
            </a>
          </div>
          <div className="uk-card-header">
            <div className="uk-grid-small uk-flex-middle" data-uk-grid>
              <div className="uk-width-auto">
                <img className="uk-border-circle" alt="" width={40} height={40} src={avatar} />
              </div>
              <div className="uk-width-expand">
                <h6 className="uk-margin-remove-bottom uk-text-bold">{author}</h6>
                <p className="uk-text-meta uk-margin-remove-top uk-text-small">
                  <time dateTime="2016-04-01T19:00">{date}</time>
                </p>
              </div>
            </div>
          </div>
          <div className="uk-card-body">
            <h4 className="uk-margin-small-bottom uk-text-bold">{title}</h4>
            <span className="uk-text-small">{text}</span>
            <a className="uk-button uk-button-text uk-text-bold uk-margin-small" href>READ MORE</a>
          </div>
        </div>
      </div>
    </li>
  );
}
 
export default StoryCard;