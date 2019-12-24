import React, {Component} from 'react';
import Category from "./category";

export default class Categories extends Component {

    constructor(props) {
        super(props);
        this.state = {
            categories: [
                {
                    title: "Baroque",
                    id: 1,
                    items: [
                        {
                            id: 1,
                            name: "vase",
                            description: "I've got it from my beloved grandma",
                            price: 100
                        },
                        {
                            id: 2,
                            name: "teapot",
                            description: "This is just off season now",
                            price: 200
                        }
                    ]
                },
                {
                    title: "Modern",
                    id: 12,
                    items:[
                        {
                            id: 3,
                            name: "Weird-looking mic",
                            description: "I don't like the sound of it, but you might !",
                            price: 150
                        }
                    ]
                }
            ]
        }
    }

    render() {
        return <React.Fragment>
            <h2>All Categories</h2>
            <p>{this.renderList()}</p>
        </React.Fragment>
    }

    renderList = () => {
        return this.state.categories.map((item, index) => {
            return (
                <Category key={index}
                          title={item.title}
                          id={item.id}
                          items={item.items}
                />
            );
        });
    };
}