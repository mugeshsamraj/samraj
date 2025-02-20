import React from 'react';
import './Project.css';

function Project() {
  return (
    <>
      <section id="projects" class="projects sec-pad">
      <div class="main-container container">
        <h2 class="heading heading-sec heading-sec__mb-bg">
          <span class="heading-sec__main">Projects</span>
          <span class="heading-sec__sub">
          I’ve worked on, including responsive dashboards, dynamic web applications, and mobile apps. From web development using React.js, Next.js, and Redux to mobile app development with React Native, each project showcases my expertise in building scalable, high-performance, and user-friendly digital experiences.
          </span>
        </h2>

        <div class="grid-section row">
          <div class="grid pjt1">
            <a href="https://miniwee.in/" target="_blank">
              <div class="grid-img">
                <img
                  src="https://miniwee.in/images/logo.png"
                  alt="Miniwee Ecommerce"
                />
              </div>
              <div class="overlay">
                <h4>Miniwee Ecommerce</h4>
                <h5>React / MUI</h5>
              </div>
            </a>
          </div>
          <div class="grid pjt2">
            <a href="https://www.zenfurniture.in/" target="_blank">
              <div class="grid-img">
                <img src="/assets/zen.png" alt="zenfurniture" />
              </div>
              <div class="overlay">
                <h4>Zen Furniture</h4>
                <h5>
                  Next / Tailwind
                </h5>
              </div>
            </a>
          </div>
          <div class="grid pjt3 ">
            <a href="https://psiog.com/" target="_blank">
              <div class="grid-img">
                <img src="/assets/psiog.png" alt="psiog" />
              </div>
              <div class="overlay">
                <h4>Psiog Digital</h4>
                <h5>
                  Next / MUI
                </h5>
              </div>
            </a>
          </div>
          <div class="grid pjt4">
            <a href="https://www.opxgl.com/" target="_blank">
              <div class="grid-img">
                <img
                  src="/assets/opx.png"
                  class="desktop-img"
                  alt="darts project"
                />
              </div>
              <div class="overlay">
                <h4>Opx Global</h4>
                <h5>
                  React / Tailwind 
                </h5>
              </div>
            </a>
          </div>
         
          </div>
      </div>
    </section>
    </>
  )
}

export default Project