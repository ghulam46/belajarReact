import React, { Component } from 'react'
import Child3 from './Child3'

export default class Child2 extends Component {

    constructor (props) {
        super(props)
            this.state = {

            }
    }

  render() {
    return (
        <div>
            <h3>Child 2</h3>

            {/* mengambil data dari parent */}
            <p>{this.props.stock}</p>

            <Child3 data={this.props.stock}/>
        </div>
    )
  }
}
