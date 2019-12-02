import React, { Component } from 'react'
import ReqComponent from './ReqComponent';
import PurComponent from './PurComponent';
import MemoComponent from './MemoComponent';

export default class ParComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'shahram'
        }
    }
    

componentDidMount(){
setInterval(() => {
    this.setState({
        name:'shahram'
    })
}, 2000);
}

    render() {
        console.log('par');
        return (
            <div>
                {/* <ReqComponent name={this.state.name} />
                <PurComponent  name={this.state.name} /> */}
                <MemoComponent name={this.state.name}/>
            </div>
        )
    }
}
