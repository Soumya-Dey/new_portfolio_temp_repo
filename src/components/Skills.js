import React from "react";

import { Paragraph } from "./sub-components/Paragraph";
import { SkillList } from "./sub-components/SkillList";

export const Skills = () => {
    const content = {
        heading: "My Skills",
        para1:
            "Through my studies, I've gained a solid understanding of computer science and web development concepts. This is what I bring to the table.",
    };

    return (
        <div className="container">
            <div className="skills-cont">
                <Paragraph content={content} />
                <SkillList />
            </div>
        </div>
    );
};
