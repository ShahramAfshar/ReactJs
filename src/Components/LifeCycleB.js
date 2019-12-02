import React, { Component } from 'react'

export class LifeCycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             family:'shahram'
        }

        console.log('constractor B');
        
    }
    
    componentDidMount(){
        console.log('componentDidMount B');
        
    }


static getDerivedStateFromProps(state,props){
console.log('getDerivedStateFromProps B');

    return null;
}

shouldComponentUpdate(){
    console.log('shouldComponentUpdate B');
 return true;   
}

getSnapshotBeforeUpdate(prevProps,prevState){
    console.log('getSnapshotBeforeUpdate B');
    return null;
}


componentDidUpdate(){
    console.log('componentWillUpdate B');
    
}



    render() {
        console.log('Render B');
        
        return (
            <div>
                <p>Life Cycle</p>
            </div>
        )
    }
}

export default LifeCycleB
