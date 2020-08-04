import React from "react";

export const Paragraph = ({ content: { heading, para1, para2 } }) => {
    return (
        <div className="aboout-text">
            <div className="about-heading">{heading && heading}</div>
            <div className="about-me">
                {para1 && para1}
                {para2 && (
                    <>
                        <br />
                        <br />
                        {para2}
                    </>
                )}
            </div>
        </div>
    );
};
