import React from "react";

const Bookmark = ({ userStatus, ...rest }) => {
    return (
        <>
            <button
                className={userStatus ? "btn btn-success" : "btn btn-warning"}
                {...rest}
            >
                {userStatus ? (
                    <i className="bi bi-bookmark-check"></i>
                ) : (
                    <i className="bi bi-bookmark"></i>
                )}
            </button>
        </>
    );
};

export default Bookmark;
