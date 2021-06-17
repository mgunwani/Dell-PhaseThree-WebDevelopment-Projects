import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default class EmployeeDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employee: {}
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/employees/' + this.props.match.params.id)
            .then(result => {
                this.setState({ employee: result.data });
                console.log(this.state.employee);
            })
            .catch(error => {
                console.log('There is some error : ' + error);
            })
    }

    deleteEmployee(id) {
        axios.delete('http://localhost:5000/employees/' + id)
            .then(result => {
                console.log(result);
                console.log('Employee Deleted Successfully..!!');
                this.props.history.push('/employees');
            })
            .catch(error => {
                console.log('There is some error : ' + error);
            })
    }

    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-header">
                        <b>Detials of {this.state.employee.name}</b>
                    </div>
                    <div className="card-body">
                        <table className="table">
                            <tbody>
                                <tr>
                                    <th>Employee ID</th>
                                    <td>{this.state.employee.id}</td>
                                </tr>
                                <tr>
                                    <th>Employee Name</th>
                                    <td>{this.state.employee.name}</td>
                                </tr>
                                <tr>
                                    <th>Employee Email</th>
                                    <td>{this.state.employee.email}</td>
                                </tr>
                                <tr>
                                    <th>Employee Salary</th>
                                    <td>{this.state.employee.salary}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="card-footer text-muted">
                        <button onClick={this.deleteEmployee.bind(this, this.state.employee.id)} className='btn btn-danger'>Delete</button>
                        &nbsp;|&nbsp;
                        <Link to={'/employee-update/' + this.state.employee.id} className='btn btn-info'>Update</Link>
                    </div>
                </div>

            </div>
        )
    }
}