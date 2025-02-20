import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <>
      <footer class="main-footer">
        <div class="main-container">
          <div class="main-footer__upper">
            <div class="main-footer__row main-footer__row-1">
              <h2 class="heading heading-sm text-lt">Mugesh Samraj</h2>
              <p class="main-footer__short-desc">
              A Frontend Engineer specializing in React.js, Next.js, and TypeScript, building scalable, high-performance web applications with optimized UI/UX. Expert in state management, SSR, API integrations, and modern UI frameworks like Tailwind CSS and Material-UI.<br /> <br />
                {/* A Frontend Web Developer building the Websites and Web
                Applications that leads to the success of the overall product.{" "}
                <br /> <br />
                If you have a good opportunity that matches my skills and
                experience then don't hesitate to
                <strong> contact </strong> me. */}
              </p>
            </div>
            <div class="main-footer__row main-footer__row-2">
              <h2 class="heading heading-sm text-lt">Address</h2>
              <p class="main-footer__short-desc">
                Place: Erode, TamilNadu <br />
                Email : mugeshsamraj@gmail.com <br />
                Phone : +91 77082 45102 <br />
              </p>
            </div>
            <div class="main-footer__row main-footer__row-3">
              <h2 class="heading heading-sm main-footer__heading-sm">
                <span>Stay Connected</span>
              </h2>
              <div class="main-footer__social-cont">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/mugeshsamraj/"
                >
                  <img
                    class="main-footer__icon"
                    src="https://rakshithkotian-portfolio.netlify.app/images/linkedin.png"
                    alt="Mugesh Linkedin Profile"
                  />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/mugeshsamraj"
                >
                  <img
                    class="main-footer__icon"
                    src="https://rakshithkotian-portfolio.netlify.app/images/github.png"
                    alt="Mugesh Github Profile"
                  />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/samrajmugesh/"
                >
                  <img
                    class="main-footer__icon"
                    src="https://rakshithkotian-portfolio.netlify.app/images/instagram.png"
                    alt="Mugesh Twitter Profile"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;