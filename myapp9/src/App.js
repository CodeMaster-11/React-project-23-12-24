import { Component } from 'react'
import Coma from './comA'
import Example from './example';

class App extends Component{
  constructor(){
    super()
    this.n='itv'

    this.state = { 
    cid:'PS405'     ,
    name: "pune",
    
  };
}
  newVal=()=>{
    this.setState({name:'kolhapur'})
  }

  

  render(){
    
    return (
      <>
      {/* <h1>Hello</h1>
      <Coma></Coma><br/>
      <h1>{this.n} {this.state.cid} {this.state.name} </h1>
      <button onClick={this.newVal}>Change</button> */}
      <Example text="Hello Brother"></Example>
    </>
    )
  }
}

export default App