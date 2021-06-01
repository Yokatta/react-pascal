import React from 'react';
import ReactDOM from 'react-dom';

class Node extends React.Component{
  constructor(props) {
    super(props);
  }
  render(){
    return <p>{this.props.name}</p>
  }
}
export default Node;
