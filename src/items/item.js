import React, { Component } from 'react';
import PropTypes from "prop-types";

export default class Item extends Component {
    constructor(props) {
        super(props);
        this.id = props.id;
        this.name = props.name;
        this.description = props.description;
        this.price = props.price
    }
    render(){
        return <React.Fragment>
            <h3>Item: {this.name}</h3>
            <p>{this.description}</p>
            <h4>Start price: {this.price}</h4>
        </React.Fragment>
    }
}

Item.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number
};

Item.defaultProps = {
    id: -1,
    name: '',
    description: '',
    price: 0
};