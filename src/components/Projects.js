import React from "react";

import { Paragraph } from "./sub-components/Paragraph";
import { ProjectItem } from "./sub-components/ProjectItem";

export const Projects = () => {
    const content = {
        heading: "What I've been working on",
        para1:
            "I like to stay busy and always have a project in the works. Take a look at some of the applications and websites I've dedicated my time to.",
    };

    return (
        <div className="container">
            <div className="skills-cont">
                <Paragraph content={content} />

                <div className="project-grid">
                    <ProjectItem />
                    <ProjectItem />
                    <ProjectItem />
                    <ProjectItem />
                </div>
            </div>
        </div>
    );
};
