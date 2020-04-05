import React from 'react';

function Banner(props) {
  return (
    <div className="hero position-relative d-flex align-items-center justify-content-center w-100">
      <img
        src={props.image}
        alt={`${props.title} image`}
        className="img-fluid position-absolute"
      />
      <div className="overlay bg-dark position-absolute" />
      <div className="position-relative text-white text-center">
        <h1 className="display-4 text-white">
          {props.title}
        </h1>
        <p className="text-white lead">
          {props.excerpt}
        </p>
      </div>
    </div>
  );
}

export default Banner;
