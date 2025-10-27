import React from "react";
import "../App.css";
import image from "../Photos/image.png";

const About = () => {
  return (
    <section class="about" id="about">
      <div class="about-container">
        <div class="about-left">
          <img src={image} alt="" />
        </div>
        <div class="about-right">
          <h2>About Me</h2>
          <p>
            Hello! I'm <strong>Yash Rathod</strong>, a passionate fresher web
            developer specializing in{" "}
            <strong>HTML, CSS, JavaScript, React, and Bootstrap</strong>. With
            hands-on experience creating interactive and responsive websites, My
            projects include themes like <strong>Fresh Fruits</strong>,{" "}
            <strong>Lotus Flowers</strong>, and <strong> Gym Bro</strong>,
            showcasing creativity and attention to detail. I'm currently
            pursuing a <strong>BScIT</strong>, honing my skills in{" "}
            <strong>full-stack development</strong>. My goal is to build
            impactful digital experiences while constantly
            <strong> learning and growing</strong> in the field.{" "}
          </p>

          <div class="list">
            <h1>Education Detail</h1>
            <ul class="study-details">
              <li>
                <h3>2020</h3>
                <h3>
                  10<sup>th</sup>
                </h3>
                <h3>72.20%</h3>
              </li>
              <li>
                <h3>2022</h3>
                <h3>
                  12<sup>th</sup>
                </h3>
                <h3>64.33%</h3>
              </li>
              <li>
                <h3>2025</h3>
                <h3>BscIT</h3>
                <h3>8.93 CGPA</h3>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
