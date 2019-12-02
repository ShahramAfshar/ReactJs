import React, { Component } from 'react'

 class EventBind extends Component {
constructor(props) {
  super(props)

  this.state = {
     message:'Hello'
  };
  this.clickHandler=this.clickHandler.bind(this)
};

clickHandler(){

   this.setState({
        message:'shahram'
    })
}

    render() {

        const {message,jafar}=this.state;
        return (
            <div>
                <div>{message}</div>
                <button onClick={this.clickHandler()}>ClickMe</button>
            </div>
        )
    }
}

export default EventBind
