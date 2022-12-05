import React from "react";
import PropTypes from "prop-types";
import User from "./user";

const UsersTable = ({ users, ...rest }) => {
    return (
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
                    <User key={user._id} {...rest} {...user} />
                ))}
            </tbody>
        </table>
    );
};
UsersTable.propTypes = {
    users: PropTypes.array.isRequired
};

export default UsersTable;
