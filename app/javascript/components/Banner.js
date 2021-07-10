import React from 'react';

function Banner() {
  return (
    <section className="hero position-relative d-flex align-items-center justify-content-center w-100">
      <img className="Cover-image bottom" src="/como.jpg" alt="a picture of mountains" />
      <div className="overlay bg-dark position-absolute"></div>
      <div className="position-relative text-white container">
        <div className="row">
          <div className="col-12 col-md-8">
            <h1 className="display-4 text-white">Michael Snook&rsquo;s site</h1>
            <p className="text-white lead">A little weblog and project pad</p>
          </div>
          <div className="col-md-4 col-12">
            <img id="my-face" src="/my-circle-drawing.png" alt="A comic sketch of Michael Snook" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
