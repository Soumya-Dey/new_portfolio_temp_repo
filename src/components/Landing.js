import React from "react";
import { Fade, Zoom } from "@material-ui/core";

import { Toggle } from "./Toggle";

export const Landing = () => {
    return (
        <div className="container">
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
                                    href="https://www.instagram.com/soumya_sl/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i class="fab fa-instagram"></i>
                                </a>
                            </Zoom>
                            <Zoom in={true} timeout={600}>
                                <a
                                    href="https://github.com/Soumya-Dey"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i class="fab fa-github"></i>
                                </a>
                            </Zoom>
                            <Zoom in={true} timeout={600}>
                                <a
                                    href="https://twitter.com/soumyadey2001"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i class="fab fa-twitter"></i>
                                </a>
                            </Zoom>
                        </div>
                    </div>

                    <Fade in={true} timeout={1400}>
                        <div className="text-cont">
                            <a href="#!" className="vert-btn">
                                view my work
                            </a>

                            <div className="landing-text">
                                Hi there, I’m Soumya.
                                <br />
                                Full Stack <span>Developer</span>,<br />
                                Student, and intern at Rent2Trust.
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    );
};
