import React, {Component} from 'react';
import PropTypes from "prop-types";

import {Link} from "react-router-dom";
import {bindActionCreators} from "redux";
import chooseCategory from "../actions/category/chooseCategory";
import {connect} from "react-redux";
import history from "../history";

class Category extends Component {
    constructor(props) {
        super(props);
        this.id = props.id;
        this.title = props.title;
        this.items = props.items;
    }

    render() {
        return <React.Fragment>
            <li>
                <Link to={"/category/" + this.id} onClick={this.sendCategory(this)}>{this.title}</Link>
                <p onClick={this.sendCategory(this)}>{this.title}</p>
                {/* onClick срабатывает, когда создаётся вся эта поебота*/}
                {/*{this.props.category.title}*/}
            </li>
        </React.Fragment>
    }

    sendCategory = (category) => {
        this.props.chooseCategory(category);
        console.log(this.props);
        history.push("/category/" + this.id)
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

const mapStateToProps = (state) => ({
    chosenCategory: state.chosenCategory
});

const mapDispatchToProps = (dispatch) => ({
    chooseCategory: bindActionCreators(chooseCategory, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Category);