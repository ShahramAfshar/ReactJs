import React, { Component } from 'react'

export default class ChildComponent extends Component {
    render() {
        return (
            <div>
                <button onClick={()=>this.props.clickBtn('shahram')}>Greet Parent</button>
            </div>
        )
    }
}
