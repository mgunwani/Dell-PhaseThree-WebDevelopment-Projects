
import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../repository";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";


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
        if (!isAuthenticated())
            return (<Redirect to='/login' />)
        return (
            <div>
                <Link to='/employee-add' className='btn btn-secondary'>Add New Employee</Link>
                <br /><br />
                <h2>Employee List</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Salary</th>
                            <th>Actions</th>
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
                                    <td>
                                        <Link to={'/employee-detail/' + employee.id} className='btn btn-secondary'>View Details</Link>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }

}