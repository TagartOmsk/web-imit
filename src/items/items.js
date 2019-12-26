import React, {Component} from 'react';
import Item from "./item";
import {bindActionCreators} from "redux";
import {connect} from "react-redux"
import chooseCategory from "../actions/category/chooseCategory";

class Items extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return <React.Fragment>
            {/*<h1>CHEEMS</h1>*/}
            <h3>Items in category "{this.props.category.title}"</h3>
            {this.renderList()}
        </React.Fragment>
    }

    renderList = () => {
        return this.props.category.items.map((item, index) => {
            return (
                <Item key={index}
                      name={item.name}
                      id={item.id}
                      description={item.description}
                      price={item.price}
                />
            );
        });
    };
}

const mapStateToProps = (state) => ({
    category: state.categoryReducer.chosenCategory
});

export default connect(mapStateToProps, null)(Items);