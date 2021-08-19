import React from 'react';
import './hero.css';

const Hero = () => {
  return (
    <section className="section hero-section">
      <div className="hero-section__content">
        <h1 className="hero-section__title">
          Reduce no-shows - <br></br>
          send automated email reminders
        </h1>
        <form className="hero-section__form form-join">
          <div className="form-join__inner-border">
            <div className="form-join__inner">
              <label className="visually-hidden" htmlFor="join-email"></label>
              <input className="form-join__field" type="email" placeholder="Your Email" name="join-email" id="join-email" />
              <button className="form-join__button" type="submit">
                Join Waitlist →
              </button>
            </div>
          </div>
        </form>
      </div>
      <a className="scroll-link" href="#card-1">
        How it Works ↓
      </a>
    </section>
  );
};

export default Hero;
