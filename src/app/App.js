import React from "react";
import { Switch, Route } from "react-router-dom";
import Users from "./components/users";
import NavBar from "./layouts/navbar";
import Main from "./layouts/main";
import Login from "./layouts/login";
import User from "./layouts/user";

const App = () => {
    return (
        <div className="container">
            <NavBar />
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/login" component={Login} />
                <Route path="/users/:userId" component={User} />
                <Route path="/users" component={Users} />
            </Switch>
        </div>
    );
};

export default App;
