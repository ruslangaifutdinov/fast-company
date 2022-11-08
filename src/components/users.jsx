import React from "react";
import api from "../api";

const Users = () => {
  const users = api.users.fetchAll();
  console.log(users);

  const renderUsers = () => {
    return users.map((user) => (
      <tr key={user._id}>
        <th scope="row">{user.name}</th>
        <td key={user._id}>
          {user.qualities.map((quality) => (
            <button className={`btn m-1 btn-` + quality.color}>
              {quality.name}
            </button>
          ))}
        </td>
        <td key={user.profession.id}>{user.profession.name}</td>
        <td>{user.completedMeetings}</td>
        <td>{user.rate}</td>
        <td>
          <button className="btn btn-danger">Delete</button>
        </td>
      </tr>
    ));
  };

  return <tbody>{renderUsers()}</tbody>;
};

export default Users;
