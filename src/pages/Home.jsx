import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const trackmanFeatures = [
  {
    title: "Face Angle",
    description: "The angle of your club face at impact determines your shot's starting direction. Master this to eliminate slices and hooks.",
    image: "/images/face-angle.png"
  },
  {
    title: "Club Path",
    description: "Understand your swing direction relative to the target line. A neutral path is key to straight, consistent shots.",
    image: "/images/club-path.png"
  },
  {
    title: "Launch Angle",
    description: "Optimize your launch angle for maximum distance. Find the perfect window for your swing speed.",
    image: "/images/launch-angle.png"
  },
  {
    title: "Smash Factor",
    description: "Measure how efficiently you transfer energy to the ball. Higher smash factor means more distance with less effort.",
    image: "/images/smash-factor.png"
  }
];

const Home = () => {
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });

    const hiddenElements = document.querySelectorAll('.fade-in-section');
    hiddenElements.forEach((el) => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, []);

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

      <section className="trackman-details container">
        <h2 className="section-title">Improve Your Game</h2>
        <div className="trackman-grid">
          {trackmanFeatures.map((feature, index) => (
            <div key={index} className="trackman-item fade-in-section">
              <div className="trackman-image">
                <img src={feature.image} alt={feature.title} />
              </div>
              <div className="trackman-info">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
