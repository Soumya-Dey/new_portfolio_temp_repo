import React from "react";
import { Fade, Zoom } from "@material-ui/core";

export const Landing = () => {
  return (
    <div className="container" id="landing">
      <div className="right-clip-1"></div>
      <div className="right-clip-2"></div>

      <div className="flex-c-spbw">
        <Zoom in={true} timeout={600}>
          <div className="logo">dEY.</div>
        </Zoom>

        <div>
          <div className="social-icons">
            <Fade in={true} timeout={1400}>
              <div className="h-line"></div>
            </Fade>

            <div className="icons">
              <Zoom in={true} timeout={600}>
                <a
                  href="https://github.com/Soumya-Dey"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    className="fab fa-github"
                    title="soumyadey's Github Profile"
                  ></i>
                </a>
              </Zoom>
              <Zoom in={true} timeout={600}>
                <a
                  href="https://dev.to/soumyadey"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    className="fab fa-dev"
                    title="soumyadey's DEV.to Profile"
                  ></i>
                </a>
              </Zoom>
              <Zoom in={true} timeout={600}>
                <a
                  href="https://www.instagram.com/soumya_sl/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    className="fab fa-instagram"
                    title="soumyadey's Instagram Profile"
                  ></i>
                </a>
              </Zoom>
              <Zoom in={true} timeout={600}>
                <a
                  href="https://twitter.com/soumyadey2001"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    className="fab fa-twitter"
                    title="soumyadey's Twitter Profile"
                  ></i>
                </a>
              </Zoom>
            </div>
          </div>

          <Fade in={true} timeout={1400}>
            <div className="text-cont">
              <a href="#projects" className="vert-btn hide-md">
                view my work
              </a>

              <div className="landing-text">
                Hi there, I’m Soumya.
                <br />
                Full Stack <span>Developer</span>,<br />
                Student, and Freelancer.
                <a href="#projects" className="hide-lg horz-btn">
                  view my work
                </a>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};
