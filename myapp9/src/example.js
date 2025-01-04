import { Component } from 'react';

class Example extends Component{
    constructor(props){
        super();
        
    }
    render(){
        return(
            <div>
                <h1>Example file</h1>
                <h1>{this.props.text}</h1>
            </div>
        )
    }
}
export default Example;