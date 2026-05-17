import React from 'react';

function RightSection({ imageURL, productName, productDescription, learnMore }) {
    return (
        <div className="container mt-5">
            <div className="row align-items-center">
                <div className="col-12 col-md-6 p-3 p-md-5 order-0">
                    <h1 className="mb-4 mt-md-5">{productName}</h1>
                    <p>{productDescription}</p>
                    <div>
                        <a href={learnMore}>Learn More</a>
                    </div>
                </div>
                <div className="col-12 col-md-6 text-center order-1">
                    <img src={imageURL} className="img-fluid" alt={productName} />
                </div>
            </div>
        </div>
    );
}

export default RightSection;
