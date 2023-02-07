import React, { Component } from 'react'
import {FaTrash} from "react-icons/fa"
export class Order extends Component {
  render() {
    return (
      <div className='item'>
        <img src={this.props.item.img} alt="img item" />
      <h2>{this.props.item.title}</h2>
      
      <p>{this.props.item.price}$</p>
      <FaTrash className="delete" onClick={()=>this.props.onDelete(this.props.item.id)}/>
      </div>
    )
  }
}

export default Order
