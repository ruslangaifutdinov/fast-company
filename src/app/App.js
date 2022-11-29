import React, { useState, useEffect } from "react";
import Users from "./components/users";
import api from "./api/index";

const App = () => {
    const [users, setUsers] = useState();

    useEffect(() => {
        api.users.fetchAll().then((data) => {
            setUsers(Object.assign(data));
        });
    }, []);

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
            {users && (
                <Users
                    users={users}
                    onDelete={handleDelete}
                    onBookmark={handleToggleBookmark}
                />
            )}
        </div>
    );
};

export default App;
