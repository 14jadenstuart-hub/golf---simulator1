import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="page home">
            <section className="hero">
                <div className="container">
                    <h1>Welcome to Birdie Club</h1>
                    <p>Play on the world's best courses, right here in the city.</p>
                    <div className="hero-actions">
                        <Link to="/tee-times" className="btn-primary">Book a Tee Time</Link>
                        <Link to="/learn-more" className="btn-secondary">Learn More</Link>
                    </div>
                </div>
            </section>

            <section className="features container">
                <div className="feature-card">
                    <h2>Top-Tier Tech</h2>
                    <p>Powered by the latest TrackMan technology for precision accuracy.</p>
                </div>
                <div className="feature-card">
                    <h2>Premium Lounge</h2>
                    <p>Relax in our comfortable lounge with drinks and snacks.</p>
                </div>
                <div className="feature-card">
                    <h2>Private Bays</h2>
                    <p>Enjoy your game in privacy with our sound-insulated bays.</p>
                </div>
            </section>
        </div>
    );
};

export default Home;
