import React from "react";

import { Paragraph } from "./Paragraph";

export const ProjectItem = () => {
    const content = {
        heading: "What I've been working on",
        para1: "I like to stay busy and always have a project in the works.",
    };

    return (
        <a href="!#">
            <img src="images/my-avatar-center.jpg" alt="project 1"></img>
            <Paragraph content={content} />
            <p>View Project</p>
        </a>
    );
};
