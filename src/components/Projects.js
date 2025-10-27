import React from "react";
import project1 from "../Photos/project1.png";
import project2 from "../Photos/project2.png";
import project3 from "../Photos/project3.png";
import project4 from "../Photos/project4.png";
import "../App.css";

function Projects() {
  return (
    <section class="project" id="project">
      <div class="project-container">
        <h2>Basic Projects</h2>
        <ul class="project-menu">
          <li class="project-item">
            <img src={project1} alt="" />
            <h3>Fresh Fruits</h3>
            <p>
              Developed a website Using Html, CSS, JavaScript, Bootstrap
              featuring a fresh fruits theme, with dedicated sections for Home,
              Blog, Bag, and Contact.
            </p>
            <div class="buttns">
              <a href="https://fresh-fruitss.netlify.app/" target="_blank">
                <button class="btn">
                  <i class="fa-solid fa-link"></i>
                </button>
              </a>
            </div>
          </li>
          <li class="project-item">
            <img src={project2} alt="" />
            <h3>Gym-Bro</h3>
            <p>
              A dedicated fitness website designed to inspire and support users
              on their fitness journey. The site includes Courses, Trainer etc
              content. Built with HTML, CSS, and JavaScript, the layout
              experience across all devices.
            </p>
            <div class="buttns">
              <a href="https://gym-broo.netlify.app/" target="_blank">
                <button class="btn">
                  <i class="fa-solid fa-link"></i>
                </button>
              </a>
            </div>
          </li>
          <li class="project-item">
            <img src={project3} alt="" />
            <h3>Lotus</h3>
            <p>
              Lotus is a e-commerce site I created using HTML, CSS, and
              JavaScript, showcasing beautiful flowers. Responsive design
              elements for an optimal viewing experience across devices.
            </p>
            <div class="buttns">
              <a href="https://lotus-flowers.netlify.app/" target="_blank">
                <button class="btn">
                  <i class="fa-solid fa-link"></i>
                </button>
              </a>
            </div>
          </li>
          <li class="project-item">
            <img src={project4} alt="" />
            <h3>Other Projects</h3>
            <p>
              I've created using HTML, CSS, JavaScript, and React. These
              projects demonstrate my versatility in front-end design,
              showcasing skills in building interactive and responsive user
              interfaces.
            </p>
            <div class="buttns">
              <a href="https://other-projects.netlify.app/" target="_blank">
                <button class="btn">
                  <i class="fa-solid fa-link"></i>
                </button>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Projects;
