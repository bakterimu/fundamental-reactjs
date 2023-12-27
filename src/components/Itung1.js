import React, { Component } from 'react'

export default class Itung1 extends Component {
  constructor(){
    super();
    this.state = {itung : 0};
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);


  }

  increment(){
    this.setState((prev) => ({itung: prev.itung+1}))
  }

  decrement(){
    this.setState((prev) => ({itung: prev.itung-1}))
  }

  render() {
    return (
      <div>
        <h3>Counter: {this.state.itung}</h3>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    )
  }
}
