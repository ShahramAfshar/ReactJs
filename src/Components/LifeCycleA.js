import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB';

export class LifeCycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'shahram'
        }

        console.log('constractor');
        
    }
    
    componentDidMount(){
        console.log('componentDidMount');
        
    }


static getDerivedStateFromProps(state,props){
console.log('getDerivedStateFromProps');

    return null;
}

shouldComponentUpdate(){
    console.log('shouldComponentUpdate');
 return true;   
}

getSnapshotBeforeUpdate(prevProps,prevState){
    console.log('getSnapshotBeforeUpdate');
    return null;
}


componentDidUpdate(){
    console.log('componentWillUpdate');
    
}

changeStateHandler=()=>{
this.setState({
name:'ali'

});
}
    render() {
        console.log('Render');
        
        return (
            <div>
               <LifeCycleB />
               <button onClick={this.changeStateHandler}>Change State</button>
            </div>
        )
    }
}

export default LifeCycleA
