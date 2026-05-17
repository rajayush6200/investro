import React from 'react';

function Hero() {
    return (
        <section className="container-fluid" id="heroPage">
            <div className="p-4 p-md-5 mt-3 mt-md-5 mb-2" id="supportWrapper">
                <h4 className="mb-0">Support Portal</h4>
                <a className="text-decoration-none" href="">Track tickets</a>
            </div>
            <div className="row px-3 px-md-4 pb-4">
                <div className="col-12 col-lg-6 p-3 p-md-5">
                    <h1 className="fs-4 fs-md-3">
                        Search for an answer or browse help topics to create a ticket
                    </h1>
                    <input placeholder="Eg: how do I activate F&O, why is my order getting rejected." />
                    <div className="mt-3 d-flex flex-wrap gap-2">
                        <a href="" className="text-decoration-none">Track account opening</a>
                        <a href="" className="text-decoration-none">Track segment activation</a>
                        <a href="" className="text-decoration-none">Intraday</a>
                        <a href="" className="text-decoration-none">Margins</a>
                        <a href="" className="text-decoration-none">Kite user manual</a>
                    </div>
                </div>
                <div className="col-12 col-lg-6 p-3 p-md-5">
                    <h1 className="fs-4 fs-md-3">Featured</h1>
                    <ol>
                        <li><a href="" className="text-decoration-none">Current Takeovers and Delisting - January 2024</a></li>
                        <li><a href="" className="text-decoration-none">Latest Intraday leverages - MIS & CO</a></li>
                    </ol>
                </div>
            </div>
        </section>
    );
}

export default Hero;
