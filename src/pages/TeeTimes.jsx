import React from 'react';

const TeeTimes = () => {
    return (
        <div className="page container">
            <h1>Book a Tee Time</h1>
            <p>Select your preferred date and time below.</p>

            <div className="booking-mockup">
                <div className="calendar-placeholder">
                    <p>[Calendar Component Placeholder]</p>
                </div>
                <div className="time-slots">
                    <button className="slot">10:00 AM</button>
                    <button className="slot">11:00 AM</button>
                    <button className="slot">12:00 PM</button>
                    <button className="slot">1:00 PM</button>
                </div>
            </div>
        </div>
    );
};

export default TeeTimes;
