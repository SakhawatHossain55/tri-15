import React, { Component } from 'react'

export default class User extends Component {
    render() {
        return (
            <div style={{border: '1px solid red'}}>
                <h3>This is {this.props.user.name}</h3>
                <h3>{this.props.user.username}</h3>
            </div>
        )
    }
}
