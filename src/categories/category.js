import React, {Component} from 'react';
import PropTypes from "prop-types";

export default class Category extends Component {
    constructor(props) {
        super(props);
        this.id = props.id;
        this.title = props.title;
    }

    render() {
        return <React.Fragment>
            <h3>{this.title}</h3>
            <p>ID: {this.id}</p>
        </React.Fragment>
    }
}
Category.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string
};

Category.defaultProps = {
    title: '',
    id: -1
};