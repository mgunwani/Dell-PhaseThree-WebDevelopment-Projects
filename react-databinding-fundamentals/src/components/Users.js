
import React, { Component } from "react";
import User from "./User";

class Users extends Component {

    state = {
        userList: [{ name: "Kartik Sharma", age: 20 },
        { name: "Gautam Sharma", age: 25 },
        { name: "Kartik Sharma", age: 20 },
        { name: "Gautam Sharma", age: 25 }]
    }

    doClickMe = () => {
        const newState = this.state.userList.map((user) => {
            const usertemp = user;
            usertemp.age += 5;
            return usertemp;
        })
        this.setState({ newState })
    }

    render() {
        return (
            <div>
                {
                    this.state.userList.map((usr, i) => {
                        return <User name={usr.name} age={usr.age} key={i} />
                    })
                }
                < input type="button" value="Increase User Age" onClick={this.doClickMe} />
            </div>
        );
    }
}

export default Users;