
import React, { Component } from "react";
import Employee from "./Employee";

export default class Employees extends Component {
    state = {
        title: 'Employee Management System Portal..!!',
        employeesList: [
            { name: 'King', age: 23 },
            { name: 'Kochhar', age: 34 },
            { name: 'Sarah', age: 40 },
            { name: 'Shruti', age: 20 },
            { name: 'Gautam', age: 18 }
        ]
    }

    render() {
        return (
            <div>
                <h2>{this.state.title}</h2>
                {
                    this.state.employeesList.map((emp, index) => {
                        return <Employee name={emp.name} age={emp.age} key={index} />
                    })
                }
            </div>
        );
    }
}
