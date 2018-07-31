import React, { Component } from 'react';
import logo from './logo.svg';

const container = {
  display: 'flex',
  flexDirection: 'column',
  height: '600px'
};

const centerStyle = {
  margin: 'auto'
}

const Logo = () => {
  return <h1>krankheit360</h1>;
};
class App extends Component {
  render() {
    return (
      <div style={container}>
        <div style={centerStyle}>
          <Logo />
          <input type='string' />
          <button>search</button>
        </div>
      </div>
    );
  }
}

export default App;
