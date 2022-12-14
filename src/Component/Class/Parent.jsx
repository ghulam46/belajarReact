import React, { Component } from 'react'
import Child1 from './Child1'

export default class Parent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            stock: 20
        }
    }

  render() {
    return (
      <Child1 stock={this.state.stock} />
    )
  }
}
