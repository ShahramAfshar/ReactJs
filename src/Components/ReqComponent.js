import React, { Component } from 'react'

export class ReqComponent extends Component {
    render() {
        console.log('reg');
        
        return (
            <div>
                <p>Regular Component</p>
                <p>{this.props.name}</p>
            </div>
        )
    }
}

export default ReqComponent
