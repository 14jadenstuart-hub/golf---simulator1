import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

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
  const location = useLocation();

  useEffect(() => {
    // Scroll to section if hash is present
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

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
            <a href="#learn-more" className="btn-secondary">Learn More</a>
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

      <section id="learn-more" className="learn-more-section container fade-in-section">
        <h2 className="section-title">About Our Simulators</h2>
        <div className="info-grid">
          <div className="info-card">
            <h3>The Technology</h3>
            <p>We use state-of-the-art TrackMan 4 dual radar technology to track every shot with pinpoint accuracy. It captures data on club path, face angle, launch angle, and much more.</p>
          </div>
          <div className="info-card">
            <h3>The Courses</h3>
            <p>Choose from over 100 world-famous courses including St Andrews, Pebble Beach, and more. Experience the challenge of championship golf without leaving the city.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section container fade-in-section">
        <h2 className="section-title">Contact Us</h2>
        <div className="contact-layout">
          <div className="contact-info">
            <h3>Location</h3>
            <p>123 Fairway Drive<br />Golf City, GC 12345</p>

            <h3>Hours</h3>
            <p>Mon-Sun: 8am - 10pm</p>

            <h3>Phone</h3>
            <p>(555) 123-4567</p>
          </div>
          <form className="contact-form">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Message"></textarea>
            <button type="submit" className="btn-primary">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
