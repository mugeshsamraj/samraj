import React from 'react';
import './About.css';

function About() {
  return (
    <>
      <section id="about" class="about sec-pad">
      <div class="main-container">
        <h2 class="heading heading-sec heading-sec__mb-med">
          <span class="heading-sec__main">About Me</span> 
          <span class="heading-sec__sub">
          I love building things for the web and enjoy transforming ideas into interactive experiences. With a strong passion for frontend development, I thrive in collaborative environments and am always eager to learn and adapt to new technologies.
          </span>
        </h2>
        <div class="about__content">
          <div class="about__content-main">
            <h3 class="about__content-title">Who's this guy?</h3>
            <div class="about__content-details">
              <p class="about__content-details-para">
                I'm a <strong>Software Developer</strong> skilled in developing dynamic web applications using React.js, Redux, and TypeScript. I specialize in integrating modern UI frameworks like Bootstrap, Tailwind CSS, and Material-UI to create seamless and engaging user experiences.
              </p>
              <p class="about__content-details-para">
              With 2.5 years of experience, I've worked on projects across e-commerce, SaaS platforms, and dashboard applications, focusing on
                {/* I'm open to <strong>Job</strong> opportunities where I can
                contribute, learn and grow. If you have a good opportunity that
                matches my skills and experience then don't hesitate to
                <strong>contact</strong> me. */}
                Building responsive UIs with React, Next.js, and SCSS.Optimizing performance by implementing efficient SSR techniques.Securing authentication through OAuth-based login systems.Enhancing state management with Redux for seamless data flow.Collaborating with teams to deliver high-quality and scalable web solutions.
              </p>
            </div>
              <a href="./#contact" class="btn btn--med btn--theme">Contact</a>
          </div>
          {/* <div class="header__logo-img-cont">
            <img src="https://rakshithkotian-portfolio.netlify.app/images/kotian.png" class="header__logo-img" alt="Rakshith photo"/>
          </div> */}
        </div> 
        <div class="about__content-skills">
          <h3 class="about__content-title">My Skills</h3>
          <ul class="topic-list">
            <li> <span><img class="skill-img" src="https://rakshithkotian-portfolio.netlify.app/images/logos/html-5.png" alt="html"/></span>HTML5</li>
            <li><span><img class="skill-img" src="https://rakshithkotian-portfolio.netlify.app/images/logos/css-3.png" alt="css3"/></span>CSS3</li>
            <li><span><img class="skill-img" src="https://rakshithkotian-portfolio.netlify.app/images/logos/js.png" alt="javascript"/></span>JavaScript</li>
            <li><span><img class="skill-img" src="https://rakshithkotian-portfolio.netlify.app/images/logos/bootstrap.png" alt="bootstrap"/></span>Bootstrap</li>
            <li><span><img class="skill-img" src="https://rakshithkotian-portfolio.netlify.app/images/logos/react.png" alt="react"/></span>React</li>
            <li><span><img class="skill-img" src="/assets/tailwindcssimg.png" alt="tailwind"/></span>Tailwind</li>
            <li><span><img class="skill-img" src="/assets/mui.png" alt="tailwind"/></span>Material UI</li>
            <li><span><img class="skill-img" src="/assets/native.png" alt="tailwind"/></span>React Native</li>

          </ul>
        </div>
      </div>
    </section>
    </>
  )
};

export default About;