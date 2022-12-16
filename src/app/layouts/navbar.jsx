import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <ul className="nav justify-content-center">
            <li className="nav-item m-5">
                <Link to="/">Main</Link>
            </li>
            <li className="nav-item m-5">
                <Link to="/login">Login</Link>
            </li>
            <li className="nav-item m-5">
                <Link to="/users">Users</Link>
            </li>
        </ul>
    );
};

export default NavBar;
