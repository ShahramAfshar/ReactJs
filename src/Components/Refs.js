import React, { Component } from 'react'

  class Refs extends Component {
      constructor(props) {
          super(props)
            this.inputRef=React.createRef();
            this.callBackRefs=null;
            this.setcallBackRefs=(element)=>{
                this.callBackRefs=element;
            }
      }
componentDidMount(){
    // this.inputRef.current.focus();
    if(this.callBackRefs){
        this.callBackRefs.focus();
    }
    
}

clickHandler=()=>{
alert(this.inputRef.current.value)
}
      
    render() {
        return (
            <div>
              <input type="text" ref={this.inputRef} />  
              <input type="text" ref={this.setcallBackRefs} />  
              <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default Refs
