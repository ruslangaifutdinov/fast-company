import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Bookmark from "./common/bookmarks";
import QualitiesList from "./ui/qualities";
import Table from "../components/common/table";

const UsersTable = ({ users, onSort, selectedSort, onBookmark, onDelete }) => {
    const columns = {
        name: {
            path: "name",
            name: "Имя",
            component: (user) => (
                <Link
                    className="text-decoration-none"
                    to={`/users/${user._id}`}
                >
                    {user.name}
                </Link>
            )
        },
        qualities: {
            name: "Качества",
            component: (user) => <QualitiesList qualities={user.qualities} />
        },
        professions: { path: "profession.name", name: "Профессия" },
        completedMeetings: {
            path: "completedMeetings",
            name: "Встретился, раз"
        },
        rate: { path: "rate", name: "Рейтинг" },
        bookmark: {
            path: "bookmark",
            name: "Избранное",
            component: (user) => (
                <Bookmark
                    userStatus={user.bookmark}
                    onClick={() => onBookmark(user._id)}
                />
            )
        },
        delete: {
            component: (user) => (
                <button
                    className="btn btn-danger"
                    onClick={() => onDelete(user._id)}
                >
                    Delete
                </button>
            )
        }
    };
    return (
        <Table
            onSort={onSort}
            selectedSort={selectedSort}
            columns={columns}
            data={users}
        />
    );
};
UsersTable.propTypes = {
    users: PropTypes.array.isRequired,
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired,
    onBookmark: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default UsersTable;
