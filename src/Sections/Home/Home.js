import React from 'react';
import './Home.css';

function Home() {
  return (
    <>
      <section class="home-hero">
        <div class="home-hero__content">
          <h1 class="heading-primary">
            Hello, I'm <br /> <span class="hero-name">Mugesh Samraj</span>
          </h1>
          <div class="home-hero__info">
            <p class="text-primary">Frontend Engineer | React & React Native Specialist.</p>
          </div>
        </div>
        <div class="home-hero__socials">
          <div class="home-hero__social">
            <a
              href="https://www.linkedin.com/in/mugeshsamraj/"
              class="home-hero__social-icon-link"
              rel="noreferrer"
              target="_blank"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/61/61109.png"
                alt="Mugesh Linkedin Profile"
                class="home-hero__social-icon"
              />
            </a>
          </div>
          <div class="home-hero__social">
            <a
              href="https://www.instagram.com/samrajmugesh/"
              class="home-hero__social-icon-link"
              rel="noreferrer"
              target="_blank"
            >
              <img
                src="https://rakshithkotian-portfolio.netlify.app/images/instagram.png"
                alt="Mugesh Twitter Profile"
                class="home-hero__social-icon"
              />
            </a>
          </div>
          <div class="home-hero__social">
            <a
              href="https://app.netlify.com/teams/mugeshsamraj/overview"
              class="home-hero__social-icon-link home-hero__social-icon-link--bd-none"
              rel="noreferrer"
              target="_blank"
            >
              <img
                src="https://rakshithkotian-portfolio.netlify.app/images/netlify.png"
                alt="Mugesh Netlify page"
                class="home-hero__social-icon"
              />
            </a>
          </div>
          <div class="home-hero__social">
            <a
              href="https://github.com/mugeshsamraj"
              class="home-hero__social-icon-link"
              rel="noreferrer"
              target="_blank"
            >
              <img
                src="https://rakshithkotian-portfolio.netlify.app/images/github.png"
                alt="Mugesh Github Profile"
                class="home-hero__social-icon"
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;