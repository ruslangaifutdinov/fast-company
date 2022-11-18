import React, { useState } from "react";
import API from "../api";
import SearchStatus from "./searchStatus";
import User from "./user";

const Users = () => {
  const [users, setUsers] = useState(API.users.fetchAll());

  const userToDelete = (userID) => {
    setUsers((prevState) => prevState.filter((user) => user._id !== userID));
  };

  const handleBookmark = (userID) => {
    const bookmarkUsers = users.map((user) => {
      if (user._id === userID) {
        console.log("init: " + user.bookmark);
        user.bookmark = !user.bookmark;
        console.log("changed: " + user.bookmark);
        return user;
      } else {
        return user;
      }
    });
    setUsers(bookmarkUsers);
  };

  return (
    <>
      <SearchStatus numberOfUsers={users.length} />
      {users.length > 0 && (
        <table className="table align-middle">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился, раз</th>
              <th scope="col">Оценка</th>
              <th scope="col">Избранное</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <User
                key={user._id}
                user={user}
                onDelete={userToDelete}
                onBookmark={handleBookmark}
              />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Users;
