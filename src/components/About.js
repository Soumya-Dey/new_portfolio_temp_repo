import React from "react";

import { Paragraph } from "./sub-components/Paragraph";

export const About = () => {
    const content = {
        heading: "About Me",
        para1:
            "I'm a 20-year-old student at Vivekananda Centenary College currently pursuing Bachelors in Computer Science. During my internships and studies, I've created some projects with great ui written in code that is functional and maintainable.",
        para2:
            "I'm a huge fan of football ⚽. Friends call me a big book worm 📚. I like to make stuff by my own and travel places with my camera 📷. And lastly a strong cup of black coffee ☕ is always there to keep the creativity up to the point.",
    };

    return (
        <div className="container" id="about">
            <div className="flex-r-spbw">
                <Paragraph content={content} showImg={true} />
                <img
                    className="banner hide-sm"
                    src="images/my-avatar-center.jpg"
                    alt="Avatar of Soumya dey"
                ></img>
            </div>
        </div>
    );
};
