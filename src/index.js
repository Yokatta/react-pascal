import React from "react";
import ReactDOM from 'react-dom';
// import * from 'react-router-dom';
import './index.css';
import App from './App';
import './components/Node.js';
import Square from './components/Square.js';
import reportWebVitals from './reportWebVitals';



function Button() {
  return (
      <button onClick={()=>{
        return (console.log('here'))
      }}>Start Button</button>
  );
}
// class Square extends React.Component{
//   constructor(){
//     super();
//   }
//   render(){
//     return <div style="height:50px;width:50px;background-color:#555;">9</div>
//   }
// }

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
