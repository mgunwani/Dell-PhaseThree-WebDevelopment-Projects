import React, { Component } from "react";
import axios from "axios";

export default class EmployeeUpdate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employee: {},
            name: null,
            email: null,
            salary: null
        };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/employees/' + this.props.match.params.id)
            .then(result => {
                this.setState({
                    employee: result.data,
                    name: result.data.name,
                    email: result.data.email,
                    salary: result.data.salary,
                });
                console.log(this.state.employee);
            })
            .catch(error => {
                console.log('There is some error : ' + error);
            })
    }

    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const employee = {
            name: this.state.name,
            email: this.state.email,
            salary: this.state.salary
        }
        axios.put('http://localhost:5000/employees/' + this.props.match.params.id, employee)
            .then(result => {
                console.log(result);
                console.log('Employee Updated Successfully..!!');
                this.props.history.push('/employees');
            })
            .catch(error => {
                console.log('There is some error : ' + error);
            })
    }


    render() {
        return (
            <div>
                <h2>Employee Update</h2> <br />
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input type="text"
                            className="form-control"
                            name="name"
                            placeholder="Enter Name Here"
                            value={this.state.name}
                            onChange={this.handleChange} />
                    </div> <br />

                    <div className="form-group">
                        <input type="text"
                            className="form-control"
                            name="email"
                            placeholder="Enter Email Here"
                            value={this.state.email}
                            onChange={this.handleChange} />
                    </div> <br />

                    <div className="form-group">
                        <input type="text"
                            className="form-control"
                            name="salary"
                            placeholder="Enter Salary Here"
                            value={this.state.salary}
                            onChange={this.handleChange} />
                    </div> <br />

                    <input type="submit" className="btn btn-secondary" value="Update Employee" /> | &nbsp;
                    <input type="reset" className="btn btn-secondary" value="Clear Fields" />
                </form>
            </div>
        )
    }
}