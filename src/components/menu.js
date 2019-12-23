import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Categories from "../categories/categories";

export default class Menu extends Component {
    render() {
        return (
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/categories">Categories</Link>
                            </li>
                            {/*<li>*/}
                            {/*    <Link to="/users">Users</Link>*/}
                            {/*</li>*/}
                        </ul>
                    </nav>

                    {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                    <Switch>
                        <Route path="/categories">
                            <Categories/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}