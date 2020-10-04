import React from "react";

import { Paragraph } from "./sub-components/Paragraph";
import { ProjectItem } from "./sub-components/ProjectItem";

export const Projects = () => {
    const content = {
        heading: "What I've been working on",
        para1:
            "I like to stay busy and always have a project in the works. Take a look at some of the applications and websites I've dedicated my time to.",
    };

    const projectDetails = [
        {
            heading: "DevConnect-Social",
            para1:
                "A social media of developers for getting and providing help to other fellow devs.",
            link: "https://github.com/Soumya-Dey/devConnect-social-media",
        },
        {
            heading: "Secrets-Keeper",
            para1:
                "A web app to share your darkest secrets with the world anonymously.",
            link: "https://secretskeeper.herokuapp.com/",
        },
        {
            heading: "Forkify-app",
            para1:
                "An app for searching various recipes. View and make your collection of tasty meals.",
            link: "https://github.com/Soumya-Dey/Forkify-app",
        },
    ];

    return (
        <div className="container" id="projects">
            <div className="skills-cont">
                <Paragraph content={content} />

                <div className="project-grid">
                    {projectDetails.map((content, i) => (
                        <ProjectItem key={i} content={content} />
                    ))}
                    <div className="view-more">
                        <p>
                            View all of my Projects on Github. I post my Blogs
                            on DEV.to.
                        </p>
                        <div>
                            <a
                                href="https://github.com/Soumya-Dey?tab=repositories"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="repo-link"
                            >
                                My Projects <i class="fas fa-caret-right"></i>
                            </a>

                            <a
                                href="https://dev.to/soumyadey"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="blog-link"
                            >
                                My Blog Posts <i class="fas fa-caret-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
