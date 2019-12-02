import React, { PureComponent } from 'react'

class PurComponent extends PureComponent {
    render() {
        console.log('pur');
        return (
            <div>
                <p>Pure Component</p>
                <p>{this.props.name}</p>
            </div>
        )
    }
}

export default PurComponent
