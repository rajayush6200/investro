import React from 'react';

function Education() {
    return (
        <div className="container mt-5 mb-5">
            <div className="row align-items-center">
                <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
                    <img src="media/images/education.svg" className="img-fluid" alt="Education" style={{ maxWidth: "90%" }} />
                </div>
                <div className="col-12 col-md-6">
                    <h1 className="mb-4 fs-2">Free and open market education</h1>
                    <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href="" className="d-inline-block mb-4" style={{ textDecoration: "none" }}>Varsity<i className="fa-solid fa-arrow-right-long mx-2"></i></a>
                    <p>Trading Q&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href="" className="d-inline-block" style={{ textDecoration: "none" }}>TradingQ&A<i className="fa-solid fa-arrow-right-long mx-2"></i></a>
                </div>
            </div>
        </div>
    );
}

export default Education;
