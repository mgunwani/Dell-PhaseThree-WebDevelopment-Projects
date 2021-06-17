import React, { Component } from "react";
import axios from "axios";

export default class EmployeeAdd extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: null,
            email: null,
            salary: null
        };
    }

    handleChange = (event) => {
        event.preventDefault();
        const {name, value} = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const employee = {
            name: this.state.name,
            email: this.state.email,
            salary: this.state.salary
        }
        console.log(employee);
        axios.post('http://localhost:5000/employees', employee)
            .then(result => {
                console.log(result);
                console.log('Employee Added Successfully..!!');
                this.props.history.push('/employees');
            })
            .catch(error => {
                console.log(error);
                console.log('There is some error..!!')
            })
    }

    render() {
        return(
            <div>
            <h2>Employee Add</h2><br/><br/>
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <input type="text" 
                    className="form-control" 
                    name="name" 
                    placeholder="Enter Name Here"
                    onChange={this.handleChange} />
                </div> <br/>

                <div className="form-group">
                    <input type="text" 
                    className="form-control" 
                    name="email" 
                    placeholder="Enter Email Here"
                    onChange={this.handleChange} />
                </div> <br/>

                <div className="form-group">
                    <input type="text" 
                    className="form-control" 
                    name="salary" 
                    placeholder="Enter Salary Here"
                    onChange={this.handleChange} />
                </div> <br/>

                <input type="submit" className="btn btn-secondary" value="Add Employee" /> | &nbsp;
                <input type="reset" className="btn btn-secondary" value="Clear Fields" />
            </form>
            </div>
        )
    }
}