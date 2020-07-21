import React from 'react';
import logo from './img/logo.svg'
class App extends React.Component{
  render(){
    return(
      <div>
        <h1>hello React</h1>
        <img src={logo} alt="logo"/>
      </div>
    )
  }
}
export default App