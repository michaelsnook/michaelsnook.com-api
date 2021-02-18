import React from 'react';

function Banner(props) {
  return (
    <div className="hero">
      {props.image && <img
        src={props.image}
        alt={`${props.title} image`}
        className="Cover-image object-top"
      />}
      <div className="w-full h-full bg-gray-700 opacity-50 absolute" />
      <div className="container relative text-white text-center ">
        <h1 className="h-title">
          {props.title}
        </h1>
        <p className="text-xl">
          {props.excerpt}
        </p>
      </div>
    </div>
  );
}

export default Banner;
