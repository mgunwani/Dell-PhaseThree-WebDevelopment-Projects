
import React, { Component } from "react";

export default class Users extends Component {
    render() {
        if (this.props.age) {
            return (
                <div>
                    <div>{this.props.header}</div>
                    <div>Name : {this.props.name} | Age: {this.props.age}</div>
                    <div>{this.props.footer}</div>
                </div>
            )
        } else {
            // return (<div>Invalid Entry..</div>);
            return (
                <div>
                    <div>{this.props.header}</div>
                    <div>Name : {this.props.name}</div>
                    <div>{this.props.footer}</div>
                </div>
            )
        }
    }
}

Users.defaultProps = {
    header: "Header Here..",
    footer: "Footer Here.. "
}
