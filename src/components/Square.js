import React from 'react';
import ReactDOM from 'react-dom';
import './Square.css';
import Node from './Node.js';

class Square extends React.Component{
  constructor(props){
    super(props);
    this.buttonClick = this.buttonClick.bind(this);
    this.state = {treeNode:null}
  }
  buttonClick(){
    this.setState({
    treeNode:this.props.name
  });
    console.log(this.props.name);
    ReactDOM.render(
      <Node name={this.props.name}/>,
      document.getElementById('root'));
  }

  render(){
    let treeSet
    if (this.state.treeNode == '1'){
      treeSet = <Node name={this.state.treeNode}/>
    }else{
      console.log('not here');
    }
    return (<React.Fragment>
            <div className='squareStyle' onClick={this.buttonClick}>{this.props.name}</div>
          </React.Fragment>)
  }
}

export default Square;
