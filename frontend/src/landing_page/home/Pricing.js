import React from 'react';

function Pricing() {
    return (
        <div className="container mb-5">
            <div className="row align-items-center g-4">
                <div className="col-12 col-lg-4">
                    <h1 className="mb-3 fs-2">Unbeatable pricing</h1>
                    <p className="text-muted">We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href="" style={{ textDecoration: "none" }}>See pricing <i className="fa-solid fa-arrow-right-long mx-2"></i></a>
                </div>
                <div className="col-12 col-lg-8">
                    <div className="row text-center g-0">
                        <div className="col-12 col-sm-6 border p-4">
                            <h1><i className="fa-solid fa-indian-rupee-sign"></i>0</h1>
                            <p>Free equity delivery and <br /> direct mutual funds</p>
                        </div>
                        <div className="col-12 col-sm-6 border p-4">
                            <h1><i className="fa-solid fa-indian-rupee-sign"></i>20</h1>
                            <p>Intraday F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;
