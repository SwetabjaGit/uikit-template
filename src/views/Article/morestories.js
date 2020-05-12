import React, { useState } from 'react';
import StoryCard from './storyCard';


const MoreStories = () => {
  const [cards, setCards] = useState([
    {
      src: 'https://unsplash.it/620/350/?random=1', 
      avatar: 'https://unsplash.it/60/60/?random', 
      author: 'Author Name', 
      date: 'April 01, 2016', 
      title: 'Sed do eiusmod tempor incididunt', 
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
    },
    {
      src: 'https://unsplash.it/620/350/?random=2', 
      avatar: 'https://unsplash.it/60/60/?random', 
      author: 'Author Name', 
      date: 'April 01, 2016', 
      title: 'Sed do eiusmod tempor incididunt', 
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
    },
    {
      src: 'https://unsplash.it/620/350/?random=3', 
      avatar: 'https://unsplash.it/60/60/?random', 
      author: 'Author Name', 
      date: 'April 01, 2016', 
      title: 'Sed do eiusmod tempor incididunt', 
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
    },
    {
      src: 'https://unsplash.it/620/350/?random=4', 
      avatar: 'https://unsplash.it/60/60/?random', 
      author: 'Author Name', 
      date: 'April 01, 2016', 
      title: 'Sed do eiusmod tempor incididunt', 
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
    },
    {
      src: 'https://unsplash.it/620/350/?random=5', 
      avatar: 'https://unsplash.it/60/60/?random', 
      author: 'Author Name', 
      date: 'April 01, 2016', 
      title: 'Sed do eiusmod tempor incididunt', 
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
    },
    {
      src: 'https://unsplash.it/620/350/?random=6', 
      avatar: 'https://unsplash.it/60/60/?random', 
      author: 'Author Name', 
      date: 'April 01, 2016', 
      title: 'Sed do eiusmod tempor incididunt', 
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
    },
    {
      src: 'https://unsplash.it/620/350/?random=7', 
      avatar: 'https://unsplash.it/60/60/?random', 
      author: 'Author Name', 
      date: 'April 01, 2016', 
      title: 'Sed do eiusmod tempor incididunt', 
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
    }
  ]);

  return (  
    <div>
      <section className="uk-section uk-section-muted">
        <div className="uk-container">
          <h2 className="uk-text-bold">More stories</h2>
          <div data-uk-slider="velocity: 5">
            <div className="uk-position-relative">
              <div className="uk-slider-container">
                <ul className="uk-slider-items uk-child-width-1-2@s uk-child-width-1-3@m uk-grid uk-grid-medium">
                  {cards && cards.map(card => (
                    <StoryCard
                      imageSrc={card.src}
                      avatar={card.avatar}
                      author={card.author}
                      date={card.date}
                      title={card.title}
                      text={card.text}
                    />
                  ))}
                </ul>
              </div>
              <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>
              <div className="uk-hidden@m uk-light">
                <a className="uk-position-center-left uk-position-small" href="#" data-uk-slidenav-previous data-uk-slider-item="previous" />
                <a className="uk-position-center-right uk-position-small" href="#" data-uk-slidenav-next data-uk-slider-item="next" />
              </div>
              <div className="uk-visible@m">
                <a className="uk-position-center-left-out uk-position-small" href="#" data-uk-slidenav-previous data-uk-slider-item="previous" />
                <a className="uk-position-center-right-out uk-position-small" href="#" data-uk-slidenav-next data-uk-slider-item="next" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
 
export default MoreStories;