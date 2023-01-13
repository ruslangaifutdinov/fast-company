import { React, useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    const [active, setActive] = useState();

    const handleActive = (navLink) => {
        setActive(navLink);
    };

    const renderActive = (navLink) => {
        return "nav-link " + (active === navLink ? "active" : "");
    };

    return (
        <ul className="nav nav-pills justify-content-center">
            <li className="nav-item active m-5">
                <Link
                    className={renderActive("main")}
                    onClick={() => handleActive("main")}
                    to="/"
                >
                    Main
                </Link>
            </li>
            <li className="nav-item m-5">
                <Link
                    className={renderActive("login")}
                    onClick={() => handleActive("login")}
                    to="/login"
                >
                    Login
                </Link>
            </li>
            <li className="nav-item m-5">
                <Link
                    className={renderActive("users")}
                    onClick={() => handleActive("users")}
                    to="/users"
                >
                    Users
                </Link>
            </li>
        </ul>
    );
};

export default NavBar;
