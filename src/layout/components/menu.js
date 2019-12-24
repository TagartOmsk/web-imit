import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Categories from "../../categories/categories";

export default class Menu extends Component {
    render() {
        return (
            // <Router>
                <div>
                    <nav>
                        <Link to="/">Home</Link>
                        {/*<li>*/}
                        <Link to="/categories">Categories</Link>
                        {/*</li>*/}
                    </nav>
                    <Route path='/'/>
                    {/*<Route path='/categories' component={Categories}/>*/}

                    {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                    {/*<Switch>*/}
                    {/*    <Route path="/categories">*/}
                    {/*        <Categories/>*/}
                    {/*    </Route>*/}
                    {/*</Switch>*/}

                    {/*<Categories/>*/}
                </div>
            // </Router>
        );
    }
}