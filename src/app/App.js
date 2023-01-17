import React from "react";
import { Switch, Route } from "react-router-dom";
import Users from "./layouts/users";
import NavBar from "./components/ui/navbar";
import Main from "./layouts/main";
import Login from "./layouts/login";

const App = () => {
    return (
        <div className="container">
            <NavBar />
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/login:type?" component={Login} />
                <Route path="/users/:userId?/:edit?" component={Users} />
            </Switch>
        </div>
    );
};

export default App;
