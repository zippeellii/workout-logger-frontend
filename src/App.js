import React, { Component } from 'react';
// import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          {this.props.children}
        </main>
        <Nav />
      </div>
    );
  }
}

export default App;