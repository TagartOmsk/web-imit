import React, {Component} from 'react';
import Item from "./item";
// import Category from "./category";

export default class Items extends Component {

    constructor(props, category) {
        super(props);
        this.state = {
            category: category,
            items: []
        }
    }

    render() {
        return <React.Fragment>
            <h2>Items for {this.state.category.render()}</h2>
            {this.renderList()}
        </React.Fragment>
    }

    renderList = () => {
        return this.state.items.map((item, index) => {
            return (
                <Item key={index}
                          name={item.text}
                          id={item.id}
                          showItems={item.showItems}
                />
            );
        });
    };
}