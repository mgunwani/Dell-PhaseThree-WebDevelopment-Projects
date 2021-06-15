
import React, { Component } from "react";
import axios from "axios";


export default class Employees extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employees: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/employees')
            .then(result => {
                this.setState({ employees: result.data })
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        return (
            <div>
                <h2>Employee List</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Salary</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.employees.map((employee, index) => {
                            return (
                                <tr key={index}>
                                    <td>{employee.id}</td>
                                    <td>{employee.name}</td>
                                    <td>{employee.email}</td>
                                    <td>{employee.salary}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }

}