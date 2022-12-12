import React, { Component } from 'react'
import './CSS/product.css'

export default class Product extends Component {

  constructor(props) {
    super(props)

    this.state= {
      stock: this.props.stock,
      sub: "Beli",
      status: "Tersedia",
      disabled: false 
    }
  }

  buttonBeli = () => {
    // fungsi setState = untuk melakukan perubahan
    this.setState ({
      stock: this.state.stock-1
    })

    // melakukan pengecekan ketika stocknya tinggal 1 dan ketika di klik maka akan tampil status habis dan buttonnya jadi disabled
    if(this.state.stock === 1) {
      this.setState({
        status: "Habis",
        disabled: true
      })
    }
  }

  render() {  
    return (
      <div className='box-stock'>
        <h2>{this.props.nama_produk}</h2>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbqpzergHv3Wsl2k1AN1sL40xVOXbuO5ifEb4_Bsn3_bMt4Wbld6VsT_8Xsh_ER71dfGs&usqp=CAU" alt="" />
        <p><h1>Rp. {this.props.harga}</h1></p>
        <p>{this.state.stock}</p>
        <button className='btn-click' onClick={this.buttonBeli} disabled={this.state.disabled}>Beli</button>
        <p>{this.state.status}</p>
      </div>
    )
  }
}
