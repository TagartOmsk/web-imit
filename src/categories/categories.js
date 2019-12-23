import React, {Component} from 'react';
import Category from "./category";

export default class Categories extends Component {

    constructor(props) {
        super(props);
        this.state = {
            categories: [
                {
                    title: "Baroque",
                    id: 1
                },
                {
                    title: "Modern",
                    id: 1488
                }
            ]
        }
    }

    render() {
        return <React.Fragment>
            <h2>Categories</h2>
            <p>{this.renderList()}</p>
        </React.Fragment>
    }

    renderList = () => {
        return this.state.categories.map((item, index) => {
            return (
                <Category key={index}
                          title={item.title}
                          id={item.id}
                    // showItems={item.showItems}
                />
            );
        });
    };
}