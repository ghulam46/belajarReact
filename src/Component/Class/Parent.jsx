import React, { Component } from 'react'
import Child1 from './Child1'
import Child2 from './Child2'

export default class Parent extends Component {

    constructor(props) {
        super(props)

        // Passing data antar component
        // 1. inisialisasi state stock
        this.state = {
            stock: 10
        }
    }

    beliProduk = (jumlah) => {
      this.setState ({
        stock: this.state.stock - jumlah
      })
    }

  render() {
    return (
      <div>
          {/* 2. kemudian buat component dan masukkan state stock */}
          <Child1 
          stock={this.state.stock} 
          
          // 3. masukan function beliProduk ke dalam props
          fungsi={this.beliProduk.bind(this)}/>

          <Child2 stock={this.state.stock} />
        </div>
    )
  }
}
