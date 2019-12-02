import React, { Component } from 'react';

class Message extends Component {

  clickedBtn(){
    alert('fired by class')
  }

  render() {


    const {name,family}=this.props;
    const{cointer,ga}=this.state;
    return (
      <div> 
        <p>{name}</p>
        <p>{family}</p>
        <button onClick={this.clickedBtn}>click me</button>
         </div>
    );
  }
}

export default Message;
