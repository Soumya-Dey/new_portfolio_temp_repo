import React from "react";

export const About = () => {
    return (
        <div className="container">
            <div className="flex-r-spbw">
                <div className="aboout-text">
                    <div className="about-heading">About me</div>
                    <div className="about-me">
                        I'm a 21-year-old student at{" "}
                        <b>
                            <em>Vivekananda Centenary College</em>
                        </b>{" "}
                        currently pursuing{" "}
                        <b>
                            <em>Bachelors in Computer Science</em>
                        </b>
                        .
                        <br />
                        During my internships and studies, I've worked alongside
                        senior designers and developers who have raised my
                        standards for whats expected of any web application.
                        Till now I've created some projects with enjoyable ui
                        written in code that is functional and maintainable.
                    </div>
                </div>
                <img
                    className="banner"
                    src="images/my-avatar-center.jpg"
                    alt="image of Soumya dey"
                ></img>
            </div>
        </div>
    );
};
