import React, { useState, useEffect } from "react";
import { paginate } from "../utils/paginate";
import Pagination from "./pagination";
import api from "../api";
import PropTypes from "prop-types";
import GroupList from "./groupList";
import SearchStatus from "./searchStatus";
import UsersTable from "./usersTable";
import _ from "lodash";

const Users = () => {
    const pageSize = 4;
    const [currentPage, setCurrentPage] = useState(1);
    const [professions, setProfessions] = useState();
    const [selectedProf, setSelectedProf] = useState();
    const [sortBy, setSortBy] = useState({ iter: "name", order: "asc" });
    const [users, setUsers] = useState();
    const [searchQuery, setSearchQuery] = useState("");
    const [filter, setFilter] = useState("");
    let userCrop = 0;
    let sortedUsers = {};

    useEffect(() => {
        api.users.fetchAll().then((data) => {
            setUsers(Object.assign(data));
        });
    }, []);

    useEffect(() => {
        api.professions.fetchAll().then((data) => {
            setProfessions(data);
        });
    }, []);

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedProf]);

    useEffect(() => {
        if (userCrop.length === 0 && currentPage !== 1) {
            setCurrentPage((prevIndex) => prevIndex - 1);
        }
    }, [sortedUsers]);

    const handleSearchQuery = ({ target }) => {
        setSelectedProf(undefined);
        setSearchQuery(target.value);
    };

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

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const handleProfessionSelect = (item) => {
        if (searchQuery !== "") setSearchQuery("");
        setSelectedProf(item);
    };

    const handleSort = (item) => {
        setSortBy(item);
    };

    if (!users) return "loading...";

    const filteredUsers = searchQuery
        ? users.filter(
            (user) =>
                user.name
                    .toLowerCase()
                    .indexOf(searchQuery.toLowerCase()) !== -1
        )
        : selectedProf
            ? users.filter(
                (user) =>
                    JSON.stringify(user.profession) ===
                    JSON.stringify(selectedProf)
            )
            : users;
    const count = filteredUsers.length;
    sortedUsers = _.orderBy(filteredUsers, [sortBy.path], [sortBy.order]);
    userCrop = paginate(sortedUsers, currentPage, pageSize);

    const clearFilter = () => {
        setSelectedProf();
    };

    return (
        <div className="d-flex">
            {professions && (
                <div className="d-flex flex-column d-shrink-0 p-3">
                    <GroupList
                        selectedItem={selectedProf}
                        items={professions}
                        onItemSelect={handleProfessionSelect}
                    />
                    <button
                        className="btn btn-secondary mt-2"
                        onClick={clearFilter}
                    >
                        Очистить
                    </button>
                </div>
            )}
            <div className="d-flex flex-column">
                <SearchStatus length={count} />
                <>
                    <div className="input-group mb-1">
                        <input
                            type="text"
                            name="searchQuery"
                            placeholder="Search..."
                            onChange={handleSearchQuery}
                            value={searchQuery}
                        />
                    </div>
                </>
                
                {count > 0 && (
                    <UsersTable
                        users={userCrop}
                        selectedSort={sortBy}
                        onSort={handleSort}
                        onDelete={handleDelete}
                        onBookmark={handleToggleBookmark}
                    />
                )}

                <div className="d-flex justify-content-center">
                    <Pagination
                        itemsCount={count}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                    />
                </div>
            </div>
        </div>
    );
};
Users.propTypes = {
    users: PropTypes.array,
};

export default Users;
