import React, { Component } from 'react';
// import './App.css';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
}

export default App;