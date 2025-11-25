import React from 'react';

const Pricing = () => {
    return (
        <div className="page container">
            <h1>Pricing</h1>
            <div className="pricing-grid">
                <div className="pricing-card">
                    <h2>Weekday</h2>
                    <p className="price">$40<span>/hour</span></p>
                    <ul>
                        <li>Before 5 PM</li>
                        <li>Up to 4 players</li>
                    </ul>
                </div>
                <div className="pricing-card featured">
                    <h2>Weekend & Evenings</h2>
                    <p className="price">$60<span>/hour</span></p>
                    <ul>
                        <li>After 5 PM & Weekends</li>
                        <li>Up to 4 players</li>
                    </ul>
                </div>
                <div className="pricing-card">
                    <h2>Membership</h2>
                    <p className="price">$150<span>/month</span></p>
                    <ul>
                        <li>Unlimited Off-Peak</li>
                        <li>20% off Peak hours</li>
                        <li>Priority Booking</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
