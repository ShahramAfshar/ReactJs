import React, { Component } from 'react';

class Counter extends Component {
constructor(props) {
  super(props)
  this.state = {
     counter:0,
  };
};

changeCounter(){
this.setState((pev)=>({

    counter:pev.counter+1
}))
}

changeCounterFive(){
   this.changeCounter();
   this.changeCounter();
   this.changeCounter();
   this.changeCounter();
   this.changeCounter();
}

  render() {
    return (
      <div> 
          <p>Counter - {this.state.counter}</p>
          <button onClick={()=>this.changeCounterFive()}>Increase Counter</button>
           </div>
    );
  }
}

export default Counter;
