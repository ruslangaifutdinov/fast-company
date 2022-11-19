import React from "react";
import Bookmark from "./bookmarks";
import Quality from "./quality";

const User = ({
  _id,
  name,
  qualities,
  profession,
  completedMeetings,
  rate,
  bookmark,
  onDelete,
  onBookmark,
}) => {
  return (
    <tr key={_id}>
      <th scope="row">{name}</th>
      <td key={_id}>
        <Quality qualities={qualities} />
      </td>
      <td>{profession.name}</td>
      <td>{completedMeetings}</td>
      <td>{rate}/5</td>
      <td>
        <Bookmark userStatus={bookmark} onClick={() => onBookmark(_id)} />
      </td>
      <td>
        <button className="btn btn-danger" onClick={() => onDelete(_id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default User;
