import React from "react";
import Bookmark from "./bookmarks";
import Quality from "./quality";

const User = (props) => {
  const { user, onDelete, onBookmark } = props;

  return (
    <tr key={user._id}>
      <th scope="row">{user.name}</th>
      <td key={user._id}>
        <Quality qualities={user.qualities} />
      </td>
      <td>{user.profession.name}</td>
      <td>{user.completedMeetings}</td>
      <td>{user.rate}</td>
      <td>
        <Bookmark
          userStatus={user.bookmark}
          onPushBookmark={() => onBookmark(user._id)}
        />
      </td>
      <td>
        <button className="btn btn-danger" onClick={() => onDelete(user._id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default User;
