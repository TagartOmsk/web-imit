import React, {Component} from 'react';
import Item from "./item";
import {bindActionCreators} from "redux";
import {connect} from "react-redux"
import getCategory from "../actions/category/getCategory";

class Items extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return <React.Fragment>
            <h3>Items in category "{this.props.category.title}"</h3> // категория не грузится
            {this.renderList()}
        </React.Fragment>
    };

    renderList = () => {
        return this.props.category.items.map((item, index) => {
            return (
                <Item key={index}
                      name={item.name}
                      id={item.id}
                      description={item.description}
                      price={item.startPrice}
                />
            );
        });
    };

    componentDidMount() {
        const urlParts = window.location.href.split('/');
        this.props.getCategory(parseInt(urlParts[urlParts.length - 1], 10))
            .then(res => {
                this.state.category = res.chosenCategory;
                return res
            })
            .then(res => {
                console.log("mount", res)
            })
        // console.log('mount', data)
    }
}


const mapStateToProps = (state) => ({
    category: state.categoryReducer.chosenCategory
});

const mapDispatchToProps = (dispatch) => ({
    getCategory: bindActionCreators(getCategory, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Items);