import React, {Component} from 'react';
import PropTypes from "prop-types";

import {Link} from "react-router-dom";

export default class Category extends Component {
    constructor(props) {
        super(props);
        this.id = props.id;
        this.title = props.title;
        this.items = props.items;
    }

    render() {
        return <React.Fragment>
            <li>
                <Link to={"/category/" + this.id}>{this.title}</Link>
            </li>
            {/*<p>ID: {this.id}</p>*/}
            {/*<p>{this.items}</p>*/}
        </React.Fragment>
    }
}
Category.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    items: PropTypes.array
};

Category.defaultProps = {
    title: '',
    id: -1,
    items: []
};