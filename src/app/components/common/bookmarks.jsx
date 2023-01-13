import React from "react";
import PropTypes from "prop-types";

const Bookmark = ({ userStatus, ...rest }) => {
    return (
        <>
            <button
                className={userStatus ? "btn btn-success" : "btn btn-warning"}
                {...rest}
            >
                {userStatus
                    ? (
                        <i className="bi bi-bookmark-check"></i>
                    )
                    : (
                        <i className="bi bi-bookmark"></i>
                    )}
            </button>
        </>
    );
};
Bookmark.propTypes = {
    userStatus: PropTypes.bool.isRequired
};

export default Bookmark;
