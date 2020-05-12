import React from 'react';

const GalleryItem = ({ imageSrc, imageHref, imageText }) => {
  return (  
    <div>
      <figure>
        <a data-caption="Image Caption" title="Image Caption" href={imageHref}>
          <img src={imageSrc} width={300} height={200} alt="Caption"/>
        </a>
        <figcaption className="uk-text-small uk-text-muted uk-text-center uk-padding-small uk-visible@s">{imageText}</figcaption>
      </figure>
    </div>
  );
}
 
export default GalleryItem;