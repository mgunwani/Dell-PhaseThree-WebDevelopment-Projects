
import React, { Component } from "react";
import axios from "axios";


export default class Users extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(result => {
                this.setState({ users: result.data })
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        return (
            <div>
                <h2>Users List</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>User Id</th>
                            <th>User Name</th>
                            <th>User Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map((user, index) => {
                            return (
                                <tr key={index}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }

}