export const Panel = () => {
  return (
    <figure className="panel" role="img" aria-labelledby="caption">
      <div className="panel__img" />
      <figcaption className="panel__content" id="caption">
        <h3>Title</h3>
        <p>Description</p>
        <button type="button" className="panel__close" aria-label="Close preview">
          Close
        </button>
      </figcaption>
    </figure>
  );
};