import React, { Component } from "react";

export default class Customer extends Component {

    state = {
        name: 'John Smith'
    }

    changeName = (newName) => {
        this.setState({ name: newName });
    }

    changeNamefromInput = (event) => {
        this.setState({ name: event.target.value });
    }

    render() {
        return (
            <div>
                <h2>Customer Management</h2>
                <h4>Customer Name : {this.state.name}</h4>
                <button onClick={() => this.changeName('Er. John Smith')}>Change Name</button> |
                <button onClick={this.changeName.bind(this, "Dr. John Smith")}>Change Name</button>
                <hr />
                <input type="text" onChange={this.changeNamefromInput} value={this.state.name} />
            </div>
        );
    }
}