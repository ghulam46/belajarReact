import React, { Component } from 'react'

export default class Child3 extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }


    // data saling berhubungan dan sama karena data berasal dan mengambil dari parent
  render() {
    return (
      <div>
        <h3>Child 3</h3>
        <p>{this.props.data}</p>
      </div>
    )
  }
}
