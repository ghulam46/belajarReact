import React, { Component } from 'react'

export default class Child1 extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

  minBeli = 1;
  render() {
    return (
      <div>
        <h3>Child Component</h3>
        {/* 3. passing data dilakukan disini
               dengan props kemudian stock */}
        <p>stock produk : {this.props.stock}</p>
        <button onClick={()=>this.props.fungsi(this.minBeli)}>Beli</button> 
        </div>
    )
  }
}