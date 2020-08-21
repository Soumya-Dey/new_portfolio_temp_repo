import React from "react";

export const Paragraph = ({ content: { heading, para1, para2 }, cl1, cl2 }) => {
    return (
        <div className="aboout-text">
            <div className={`about-heading ${cl1}`}>{heading && heading}</div>
            <div className={`about-me ${cl2}`}>
                {para1 && para1}
                {para2 && (
                    <>
                        <br />
                        <br />
                        <p className="w-full-md">{para2}</p>
                    </>
                )}
            </div>
        </div>
    );
};
