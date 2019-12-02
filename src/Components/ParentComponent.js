import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export default class ParentComponent extends Component {
constructor(props) {
  super(props)

  this.state = {
     ParentName:'Parent'
  };

  this.greetParent=this.greetParent.bind(this);
};


greetParent(name){

alert('Hello '+ this.state.ParentName + name)    
}


    render() {
        return (
            <div>
                <ChildComponent clickBtn={this.greetParent} />
            </div>
        )
    }
}
