import React, { useState } from "react";
import Users from "./users";
import SearchStatus from "./searchStatus";
import API from "..";

const App = () => {
  const [users, setUsers] = useState(API.users.fetchAll());

  const handleDelete = (userID) => {
    const deleteUser = users.filter((user) => user._id !== userID);
    setUsers(deleteUser);
  };

  const handleToggleBookmark = (userID) => {
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
    <div className="container">
      <SearchStatus numberOfUsers={users.length} />
      <Users
        users={users}
        onDelete={handleDelete}
        onBookmark={handleToggleBookmark}
      />
    </div>
  );
};

export default App;
