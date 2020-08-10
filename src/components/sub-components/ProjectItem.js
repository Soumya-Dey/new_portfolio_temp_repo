import React from "react";

import { Paragraph } from "./Paragraph";

export const ProjectItem = ({ content }) => {
    return (
        <a href={content.link}>
            <div alt="project 1" className="project-img"></div>
            <Paragraph
                content={content}
                cl1="project-heading"
                cl2="project-details"
            />
            <p href="!#" className="view-href">
                View Project <i class="fas fa-angle-right"></i>
            </p>
        </a>
    );
};
