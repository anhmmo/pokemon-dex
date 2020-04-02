import React, { Component } from 'react';
import './App.css';
import Loading from './components/Loading/Loading';
import CardList from './components/CardList/CardList';
class App extends Component {
 /* constructor() {
    super();
    this.state = {
      
    }
  }
*/


componentDidMount() {
  window.onload = () => {
    setTimeout(() => {
        document.getElementById("load").style.display = 'none';
        document.getElementById("pokemon").style.display = 'flex';
    }, 2000);
}
}
  render() {
    return (
      <div className="App">
        <Loading />
        <CardList />
      </div>
    );
  }
 
}

export default App;
