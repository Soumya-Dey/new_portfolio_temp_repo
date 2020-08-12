import React from "react";

export const Mail = ({ email }) => {
    return (
        <div className="mail-link">
            <i className="far fa-envelope"></i>
            <a className="mail-link-href" href={`mailto:${email}`}>
                {email}
            </a>
        </div>
    );
};
