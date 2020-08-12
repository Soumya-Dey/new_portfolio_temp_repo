import React from "react";

import { Paragraph } from "./sub-components/Paragraph";
import { GridItem } from "./sub-components/GridItem";
import { CoolText } from "./sub-components/CoolText";
import { Mail } from "./sub-components/Mail";

export const Contact = () => {
    const content = {
        heading: "Let's build something together",
        para1: `Feel free to reach out if you're looking for a developer, have a question, or just want to connect.`,
    };

    const instaFeed = [
        {
            id: "insta-feed-1",
            image: "glenaries-cupcakes",
        },
        {
            id: "insta-feed-2",
            image: "tea-estate-darjeeling",
        },
        {
            id: "insta-feed-3",
            image: "sunrise-from-window",
        },
        {
            id: "insta-feed-4",
            image: "beef-manchurian",
        },
    ];

    return (
        <div className="container container-alt" id="contact">
            <div className="contact-cont">
                <Paragraph content={content} />
                <Mail email="soumyadey200@hotmail.com" />
                <div className="cool-insta-cont">
                    <CoolText />
                    <div className="insta-grid">
                        {instaFeed.map((feed) => (
                            <GridItem
                                key={feed.id}
                                image={feed.image}
                                classN={feed.id}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
