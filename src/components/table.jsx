import React, { useState } from "react";
import api from "../api";

const Table = () => {
  const [users, setUsers] = useState(api.users.fetchAll());

  const handleUsersChange = (id) => {
    setUsers((prevState) => prevState.filter((user) => user !== id));
  };

  const renderString = () => {
    return users.length > 1 && users.length < 5
      ? `${users.length} человека тусанёт с тобой`
      : `${users.length} человек тусанёт с тобой`;
  };

  const handleColor = () => {
    return users.length !== 0 ? "primary" : "danger";
  };

  const renderUsers = () => {
    return users.map((user) => (
      <tr key={user._id}>
        <th scope="row">{user.name}</th>
        <td key={user._id}>
          {user.qualities.map((quality) => (
            <button
              key={quality._id}
              className={`btn m-1 btn-` + quality.color}
            >
              {quality.name}
            </button>
          ))}
        </td>
        <td key={user.profession.id}>{user.profession.name}</td>
        <td>{user.completedMeetings}</td>
        <td>{user.rate}</td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => handleUsersChange(user)}
          >
            Delete
          </button>
        </td>
      </tr>
    ));
  };

  return (
    <>
      <h1 className={`badge fs-3 bg-` + handleColor()}>
        {users.length !== 0 ? renderString() : "Никто с тобой не тусанёт"}
      </h1>
      <table className="table align-middle">
        <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встретился, раз</th>
            <th scope="col">Оценка</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>{renderUsers()}</tbody>
      </table>
    </>
  );
};

export default Table;
