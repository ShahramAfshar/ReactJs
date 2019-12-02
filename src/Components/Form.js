import React, { Component } from 'react';

class Form extends Component {
constructor(props) {
  super(props)

  this.state = {
     userName:'',
     comment:'',
     topic:'react'
  };


};

changeComment=(e)=>{
    this.setState({
        comment:e.target.value
    })
}


 chaneHandler=(e)=>{
  this.setState({

    userName:e.target.value
  });
}

handleTopic=(e)=>{
    this.setState({
        topic:e.target.value
    })
}

handleForm=(e)=>{
alert(this.state.userName)
e.preventDefault();
}

  render() {
const {userName , comment,topic} = this.state;

    return (
      <form onSubmit={this.handleForm}>
          <div>
              <label>user name </label>
              <input value={userName} onChange={this.chaneHandler} type='text' />
            <textarea value={comment} onChange={this.changeComment} />
            <input value="sa" />
          </div>
          <div>
              <label>Topic</label>
              <select value={topic} onChange={this.handleTopic}>
                  <option value="angular">angular</option>
                  <option value="react" >react</option>
                  <option value="vue" >vue</option>
              </select>
          </div>
         <input type="submit" value="click me" />
      </form>
    );
  }
}

export default Form;
