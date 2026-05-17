import React from 'react';

function Awards() {
    return (
        <div className="container p-3 p-md-5 mb-5">
            <div className="row align-items-center">
                <div className="col-12 col-md-6 p-3 p-md-5 text-center">
                    <img src="media/images/largestBroker.svg" className="img-fluid" alt="Largest broker" />
                </div>
                <div className="col-12 col-md-6 p-3 p-md-5 mt-3 mt-md-5">
                    <h1 className="fs-3 fs-md-2">Largest stock broker in India</h1>
                    <p className="mb-4">2+ million INVESTRO clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                    <div className="row">
                        <div className="col-12 col-sm-6">
                            <ul>
                                <li>Futures and Options</li>
                                <li>Commodity derivatives</li>
                                <li>Currency derivatives</li>
                            </ul>
                        </div>
                        <div className="col-12 col-sm-6">
                            <ul>
                                <li>Stocks & IPOs</li>
                                <li>Direct mutual funds</li>
                                <li>Bonds and Govt. Securities</li>
                            </ul>
                        </div>
                    </div>
                    <img src="media/images/pressLogos.png" className="img-fluid mt-3" alt="Press logos" style={{ maxWidth: "90%" }} />
                </div>
            </div>
        </div>
    );
}

export default Awards;
