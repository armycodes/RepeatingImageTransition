import { forwardRef } from 'react';

export const GridItem = forwardRef(({ image, config, onClick }, ref) => {
  return (
    <figure 
      className="grid__item" 
      role="img" 
      aria-labelledby={`caption${image.id}`}
      ref={ref}
      onClick={onClick}
    >
      <div 
        className="grid__item-image" 
        style={{ backgroundImage: `url(${image.url})` }}
      />
      <figcaption className="grid__item-caption" id={`caption${image.id}`}>
        <h3>{image.title}</h3>
        <p>{image.description}</p>
      </figcaption>
    </figure>
  );
});

GridItem.displayName = 'GridItem';