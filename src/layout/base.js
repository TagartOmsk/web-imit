import React, {Component} from 'react';
import Sidebar from "./components/sidebar";
import Menu from "./components/menu";

export default class Base extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Menu/>
                <main>
                    <Sidebar />
                    <section>
                        {this.props.children}
                    </section>
                </main>
            </React.Fragment>
        );
    }
}