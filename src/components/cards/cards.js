import React from 'react';
import './cards.css';

const Cards = () => {
  return (
    <ol className="cards-list">
      <li>
        <section className="card card-1" >
          <span className="scroll-link__anchor" id="card-1">
          </span>
          <div className="card__content">
            <span className="card__subtitle">
              Step 1
            </span>
            <h2 className="card__title">
              Connect Google calendar
            </h2>
            <p className="card__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="card__border"></div>
            <p className="card__footer-text">
              <span>Coming soon:</span>
              <a href="#">
                <img width="89" height="16" src="/static/img/yahoo.svg" alt="yahoo!mail" />
              </a>
              <a href="#"><img width="35" height="14" src="/static/img/Aol.svg" alt="Aol"/>
              </a>
            </p>
          </div>
          <div className="card__media card-1__media">
            <picture>
              <source type="image/webp" srcSet="/static/img/google-calendar-icon.webp 1x, /static/img/google-calendar-icon@2x.webp 2x, /static/img/google-calendar-icon@3x.webp 3x" />
              <source type="image/png" srcSet="/static/img/google-calendar-icon.png 1x, /static/img/google-calendar-icon@2x.png 2x, /static/img/google-calendar-icon@3x.png 3x" />
              <img src="/static/img/google-calendar-icon.png" width="556" height="400" alt="Step 1 screen: connect Google calendar" loading="lazy" decoding="async" />
            </picture>
          </div>
        </section>
      </li>
      <li>
        <section className="card card-2">
          <div className="card__content">
            <span className="card__subtitle">
              Step 2
            </span>
            <h2 className="card__title">
              Aghhh will analyze upcoming meetings
            </h2>
            <p className="card__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="card__media card-2__media">
            <picture>
              <source type="image/webp" srcSet="/static/img/card-2-image.webp 1x, /static/img/card-2-image@2x.webp 2x, /static/img/card-2-image@3x.webp 3x" />
              <source type="image/png" srcSet="/static/img/card-2-image.png 1x, /static/img/card-2-image@2x.png 2x, /static/img/card-2-image@3x.png 3x" />
              <img src="/static/img/card-2-image.png" width="797" height="401" alt="Step 2 screen: google calendar - analyze upcoming meeting" loading="lazy" decoding="async" />
            </picture>
          </div>
        </section>
      </li>
      <li>
        <section className="card card-3">
          <div className="card__content">
            <span className="card__subtitle">
              Step 3
            </span>
            <h2 className="card__title">
              Aghhh defines an unanswered meeting
            </h2>
            <p className="card__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="card__media card-3__media">
            <picture>
              <source type="image/webp" srcSet="/static/img/card-3-image.webp 1x, /static/img/card-3-image@2x.webp 2x, /static/img/card-3-image@3x.webp 3x" />
              <source type="image/png" srcSet="/static/img/card-3-image.png 1x, /static/img/card-3-image@2x.png 2x, /static/img/card-3-image@3x.png 3x" />
              <img src="/static/img/card-3-image.png" width="695" height="401" alt="Step 3 screen: google calendar - defines unanswered meeting" loading="lazy" decoding="async" />
            </picture>
          </div>
        </section>
      </li>
      <li>
        <section className="card card-4">
          <div className="card__content">
            <span className="card__subtitle">
              Step 4
            </span>
            <h2 className="card__title">
              Aghhh automatically send a mail to Josh
            </h2>
            <p className="card__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="borer"></div>
          </div>
          <div className="card__media card-4__media">
            <picture>
              <source type="image/webp" srcSet="/static/img/card-4-image.webp 1x, /static/img/card-4-image@2x.webp 2x, /static/img/card-4-image@3x.webp 3x" />
              <source type="image/png" srcSet="/static/img/card-4-image.png 1x, /static/img/card-4-image@2x.png 2x, /static/img/card-4-image@3x.png 3x" />
              <img src="/static/img/card-4-image.png" width="797" height="401" alt="Step 4 screen: google mail - auto send mail" loading="lazy" decoding="async" />
            </picture>
          </div>
        </section>
      </li>
      <li>
        <section className="card card-5">
          <div className="card__content">
            <span className="card__subtitle">
              Step 5
            </span>
            <h2 className="card__title">
              Lorem Ipsum
            </h2>
            <p className="card__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="borer"></div>
          </div>
          <div className="card__media card-5__media">
            <picture>
              <source type="image/webp" srcSet="/static/img/card-5-image.webp 1x, /static/img/card-5-image@2x.webp 2x, /static/img/card-5-image@3x.webp 3x" />
              <source type="image/png" srcSet="/static/img/card-5-image.png 1x, /static/img/card-5-image@2x.png 2x, /static/img/card-5-image@3x.png 3x" />
              <img src="/static/img/card-5-image.png" width="556" height="400" alt="Step 5 screen: confirmed meeting" loading="lazy" decoding="async" />
            </picture>
          </div>
        </section>
      </li>
    </ol>
  );
};

export default Cards;
