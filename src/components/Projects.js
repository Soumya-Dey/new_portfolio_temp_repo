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
            heading: "Track-Corona",
            para1:
                "A simple website to track and get latest data about COVID-19 pandemic.",
            link: "https://github.com/Soumya-Dey/track-corona",
        },
        {
            heading: "Secrets-Keeper",
            para1:
                "A web app to share your darkest secrets with the world anonymously.",
            link: "https://secretskeeper.herokuapp.com/",
        },
        {
            heading: "Notes-Keeper",
            para1:
                "A note taking app made with ReactJS inspired from Google Keep.",
            link: "https://github.com/Soumya-Dey/React-Keeper-app",
        },
        {
            heading: "Forkify-app",
            para1:
                "An app for searching various recipes. View and make your collection of tasty meals.",
            link: "https://github.com/Soumya-Dey/Forkify-app",
        },
        {
            heading: "PIG-Game",
            para1:
                "A simple dice board game with a little twist added to it for more fun.",
            link: "https://github.com/Soumya-Dey/PIG-Game",
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
                </div>
            </div>
        </div>
    );
};
