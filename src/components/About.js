import React from "react";

import { Paragraph } from "./sub-components/Paragraph";

export const About = () => {
    const content = {
        heading: "About Me",
        para1:
            "I'm a 20-year-old student at Vivekananda Centenary College currently pursuing Bachelors in Computer Science.",
        para2:
            "During my internships and studies, I've worked alongside senior designers and developers who have raised my standards for whats expected of any web application. Till now I've created some projects with enjoyable ui written in code that is functional and maintainable.",
    };

    return (
        <div className="container" id="about">
            <div className="flex-r-spbw">
                <Paragraph content={content} />
                <img
                    className="banner"
                    src="images/my-avatar-center.jpg"
                    alt="Avatar of Soumya dey"
                ></img>
            </div>
        </div>
    );
};
