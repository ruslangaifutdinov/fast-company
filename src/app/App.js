import React, { useState } from "react";
import Users from "./components/users";
import SearchStatus from "./components/searchStatus";
import API from "./api/index";

const App = () => {
    const [users, setUsers] = useState(API.users.fetchAll());

    const handleDelete = (userID) => {
        setUsers(users.filter((user) => user._id !== userID));
    };

    const handleToggleBookmark = (userID) => {
        const bookmarkUsers = users.map((user) => {
            if (user._id === userID) {
                user.bookmark = !user.bookmark;
                return user;
            }
            return user;
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
