import React, { useState } from "react";
import Users from "./components/users";
import SearchStatus from "./components/searchStatus";
import api from "./api/index";

const App = () => {
    const [users, setUsers] = useState(api.users.fetchAll());

    const handleDelete = (userID) => {
        setUsers(users.filter((user) => user._id !== userID));
    };

    const handleToggleBookmark = (userID) => {
        setUsers(
            users.map((user) => {
                if (user._id === userID) {
                    return { ...user, bookmark: !user.bookmark };
                }
                return user;
            })
        );
    };

    return (
        <div className="container">
            <SearchStatus length={users.length} />
            <Users
                users={users}
                onDelete={handleDelete}
                onBookmark={handleToggleBookmark}
            />
        </div>
    );
};

export default App;
