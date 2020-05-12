import React, { useState } from 'react';
import GalleryItem from './galleryItem';


const Gallery = () => {
  const [images, setImages] = useState([
    {
      src: 'https://picsum.photos/300/200/?random=1',
      href: 'https://picsum.photos/1200/800?image=1072',
      text: 'Aenean vitae est'
    },
    {
      src: 'https://picsum.photos/300/200/?random=2',
      href: 'https://picsum.photos/1200/800?image=1072',
      text: 'Aenean vitae est'
    },
    {
      src: 'https://picsum.photos/300/200/?random=3',
      href: 'https://picsum.photos/1200/800?image=1072',
      text: 'Aenean vitae est'
    },
    {
      src: 'https://picsum.photos/300/200/?random=4',
      href: 'https://picsum.photos/1200/800?image=1072',
      text: 'Aenean vitae est'
    },
    {
      src: 'https://picsum.photos/300/200/?random=5',
      href: 'https://picsum.photos/1200/800?image=1072',
      text: 'Aenean vitae est'
    },
    {
      src: 'https://picsum.photos/300/200/?random=6',
      href: 'https://picsum.photos/1200/800?image=1072',
      text: 'Lorem ipsum dolor'
    }
  ]);

  return (  
    <div className="uk-container uk-container-small uk-margin-medium">
      <div className="uk-grid uk-grid-medium uk-child-width-1-2 uk-child-width-1-3@s" data-uk-grid data-uk-lightbox>
        {images && images.map(image => (
          <GalleryItem
            imageSrc={image.src}
            imageHref={image.href}
            imageText={image.text}
          />
        ))}
      </div>
    </div>
  );
}
 
export default Gallery;