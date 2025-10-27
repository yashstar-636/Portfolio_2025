import React from "react";
import "../App.css";

function Skills() {
  return (
    <section className="skill" id="skill">
      <div className="skill-container">
        <h2>Skills</h2>
        <div className="skill-menu">
          <div className="skill-item">
            <p>HTML</p>
            <div className="container">
              <div className="skills html">90%</div>
            </div>
          </div>

          <div className="skill-item">
            <p>CSS</p>
            <div className="container">
              <div className="skills css">60%</div>
            </div>
          </div>

          <div className="skill-item">
            <p>JavaScript</p>
            <div className="container">
              <div className="skills js">80%</div>
            </div>
          </div>

          <div className="skill-item">
            <p>Bootstrap</p>
            <div className="container">
              <div className="skills boot">50%</div>
            </div>
          </div>

          <div className="skill-item">
            <p>React</p>
            <div className="container">
              <div className="skills react">60%</div>
            </div>
          </div>

          <div className="skill-item">
            <p>Technical Knowledge</p>
            <div className="container">
              <div className="skills tech">90%</div>
            </div>
          </div>

          <div className="skill-item">
            <p>Java</p>
            <div className="container">
              <div className="skills java">50%</div>
            </div>
          </div>

          <div className="skill-item">
            <p>Python</p>
            <div className="container">
              <div className="skills python">50%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
