import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.inputRef=React.createRef();
  }
  handledSubmit = (event) => {
    event.preventDefault();
    console.log(this.inputRef.current.value);
  }
  render(){
  return(
  <>
      <form onSubmit={this.handledSubmit}>
        <input type="text" ref={this.inputRef} defaultValue={'Kaustubh'}/>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}
}

export default App;
