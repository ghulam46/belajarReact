import React, { Component } from 'react'
import Child1 from './Child1'

export default class Parent extends Component {

    constructor(props) {
        super(props)

        // Passing data antar component
        // 1. inisialisasi state stock
        this.state = {
            stock: 20
        }
    }

    beliProduk = (jumlah) => {
      this.setState ({
        stock: this.state.stock - jumlah
      })
    }

  render() {
    return (
        // 2. kemudian buat component dan masukkan state stock
        <Child1 
        stock={this.state.stock} 
        fungsi={this.beliProduk.bind(this)}/>
    )
  }
}
