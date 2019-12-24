import React, {Component} from 'react';
import Item from "./item";

export default class Items extends Component {

    constructor(props) {
        super(props);
        this.state = {
            category: props.category,
        }
    }

    render() {
        return <React.Fragment>
            <h3>Items in category {this.state.category.title}</h3>
            {this.renderList()}
        </React.Fragment>
    }

    renderList = () => {
        return this.state.category.items.map((item, index) => {
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