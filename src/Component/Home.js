import React, { Component } from 'react'
import User from './User';

export default class Home extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            users: []
        }
        
    }
    
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            this.setState({users: data});
        })
    }
    
    render() {
        return (
            <div>
                <h3>User: {this.state.users.length}</h3>
                {
                    this.state.users.map(user => <User user={user}></User>)
                }
            </div>
        )
    }
}
