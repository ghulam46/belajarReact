import React, { Component } from 'react'

export default class Child1 extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

  render() {
    return (
      <div>
        <h3>Child Component</h3>
        <p>stock produk : {this.props.stock}</p>
        </div>
    )
  }
}