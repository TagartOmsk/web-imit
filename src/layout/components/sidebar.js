import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

export default class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.categories = props.categories;
    }

    render() {
        return <React.Fragment>
            <aside>
                <ul>
                    {this.renderList()}
                </ul>
            </aside>
        </React.Fragment>
    }

    renderList() {
        return this.categories.map((item, index) => {
            return (
                <NavLink exact to={'/categories/' + item.id}>
                    <div>{item.title}</div>
                </NavLink>
            );
        });
    }
}