import React, { Component } from 'react'

export class  Item extends Component {
    render(){
  return (
    <div className='item'>
      <img src={this.props.item.img} alt="img item" />
      <h2>{this.props.item.title}</h2>
      <p>{this.props.item.text}</p>
      <h2>{this.props.item.price}$</h2>
    <div className='add-to-cart' onClick={()=>this.props.onAdd(this.props.item)} >+</div>
      
    </div>
  )
}
}
export default Item
