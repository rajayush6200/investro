import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-12 col-md-6 p-3 p-md-5 text-center order-1 order-md-0">
          <img src={imageURL} className="img-fluid" alt={productName} />
        </div>
        <div className="col-12 col-md-6 mt-4 mt-md-5 order-0 order-md-1">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div className="d-flex flex-column flex-sm-row flex-wrap gap-3">
            <a href={tryDemo}>
              Try Demo <i className="fa-solid fa-arrow-right-long mx-2"></i>
            </a>
            <a href={learnMore}>
              Learn More<i className="fa-solid fa-arrow-right-long mx-2"></i>
            </a>
          </div>
          <div className="mt-4 d-flex flex-wrap gap-3 align-items-center">
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" alt="Google Play" />
            </a>
            <a href={appStore}>
              <img src="media/images/appstoreBadge.svg" alt="App Store" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
