import React from "react";

export const Footer = () => {
    return (
        <div className="container container-alt" id="footer">
            <div className="footer-cont">
                <div className="logo footer-logo">dEY.</div>
                <p className="hide-sm">#BlackLivesMatter</p>
                <div className="footer-links">
                    <a
                        className="github-link"
                        href="https://github.com/Soumya-Dey"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        github
                    </a>
                    <a
                        className="insta-link"
                        href="https://www.instagram.com/soumya_sl/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        instagram
                    </a>
                    <a
                        className="twitter-link"
                        href="https://twitter.com/soumyadey2001"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        twitter
                    </a>
                </div>
            </div>
        </div>
    );
};
