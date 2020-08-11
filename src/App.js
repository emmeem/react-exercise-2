import React, { Component } from 'react';
import './App.scss';
import Navigation from './components/Navigation';
import Product from './components/Product';

class App extends Component {
  render() {
    return (
      <main className="app">
        <Navigation />
        <Product />
      </main>
    );
  }
}

export default App;
