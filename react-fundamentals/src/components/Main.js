
import React, { Component } from "react";
import User from "./User";
import Users from "./Users";

export default class Main extends Component {
    render() {
        return (
            <div>
                <h2>Main Component</h2>

                <hr />

                {/* class Component */}
                <h3>Users Class Component</h3>
                <Users name="King Kochhar" age="23" /> <br />
                <Users name="John Smith" />

                <hr />

                {/* Function Component */}
                <h3>User Function Component</h3>
                <User name="Shreya Sharma" age="20" />
                <User name="Shreya Sharma" />
                <User name="Shreya Sharma" age="20">1200</User>

            </div>
        )
    }
}
