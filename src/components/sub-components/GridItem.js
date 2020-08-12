import React from "react";

export const GridItem = ({ image, classN }) => {
    return (
        <img className={classN} src={`images/${image}.jpg`} alt={image}></img>
    );
};
