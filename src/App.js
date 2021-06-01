import logo from './logo.svg';
import './App.css';
import './components/Node.js';
import Square from './components/Square.js';
import React from "react";

class App extends React.Component {
  constructor(props) {
   super(props);
   this.state = {isStart: true,showTree:true};

   // This binding is necessary to make `this` work in the callback
   this.handleClick = this.handleClick.bind(this);
 }

 handleClick() {
   this.setState(prevState => ({
     isStart: !prevState.isStart
   }));
 }
  render(){
  let render;
    if (this.state.isStart) {
      render = <React.Fragment>
        <Square name='1'/>
        <Square name='2'/>
        <Square name='3'/>
        <br></br>
        <Square name='4'/>
        <Square name='5'/>
        <Square name='6'/>
        <br></br>
        <Square name='7'/>
        <Square name='8'/>
        <Square name='9' />
        <br></br>
      </React.Fragment>;
    }else{
      render = <p>Press button to start</p>
    }
    return (
      <React.Fragment>
      <div className="App">
        {render}
        <button onClick={this.handleClick}>{this.state.isStart ?'Close' :'Start'}</button>
      </div>
      </React.Fragment>
    );
  }
}

export default App;
