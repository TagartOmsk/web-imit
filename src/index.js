import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux'

import store from './store/store';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

// import './index.css';
import Categories from "./categories/categories";
import Items from "./items/items";

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <Categories/>
                </Route>
                <Route exact path='/category/:id'>
                    <Items/>
                </Route>
                {/*<Route path='/item/{id}'>*/}
                {/*    <ItemPage item={}/>*/}
                {/*</Route>*/}
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);