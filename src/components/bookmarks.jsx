import React from "react";

const Bookmark = (props) => {
  const { userStatus, onPushBookmark } = props;

  return (
    <>
      <button
        className={userStatus ? "btn btn-success" : "btn btn-warning"}
        onClick={onPushBookmark}
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
