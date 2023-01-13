import React from "react";
import PropTypes from "prop-types";

const SearchStatus = ({ length }) => {
    const insertRightWord = (length) => {
        const strings = ["человек", "человека"];
        const value = Math.abs(length) % 100;
        const number = value % 10;
        if ((value > 10 && value < 20) || number === 1) return strings[0];
        if (number > 1 && number < 5) return strings[1];
        return strings[0];
    };

    const renderString = () => {
        return `${length} ${insertRightWord(
            length
        )} тусанёт с тобой`;
    };

    const handleColor = () => {
        return length !== 0 ? "primary" : "danger";
    };

    return (
        <h1 className={`badge fs-3 bg-` + handleColor()}>
            {length !== 0 ? renderString() : "Никто с тобой не тусанёт"}
        </h1>
    );
};
SearchStatus.propTypes = {
    length: PropTypes.number.isRequired
};

export default SearchStatus;
