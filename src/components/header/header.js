import React from 'react'
import { useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import Order from '../order/order';
export default function Header(props) {
    let [open, setOpen]= useState(false)

    const showOrder = (props) =>{
        let cost = 0
        props.order.forEach(el=> cost +=Number.parseFloat(el.price))
        return(
            <div>
                {props.order.map(el=>(
                <Order onDelete={props.onDelete} key={el.id} item={el} />
            ))}
            <p className='cost'>Total Cost:{new Intl.NumberFormat().format(cost)}$</p>
            </div>
        )
    }

    const showNoting = ()=>{
        return (
            <div className='empity'>
                <h2>Empity  </h2>
            </div>
        )
    }
  return (
    <header>
        <div>
            <span className='logo'>
                Shopping
            </span>
            
            <ul className='nav'>
                <li>About Us</li>
                <li>Contacts</li>
                <li>Home</li>
            </ul>
            <FaShoppingCart onClick={()=>setOpen(open =!open)} className={`shop-cart-button ${open && 'active'}`}/>
            {open &&(
                <div className='shop-cart'>
                    {/* {props.order.map(el=>(
                        <Order key={el.id} item={el} />
                    ))} */}

                    {props.order.length > 0 ?
                      showOrder(props) : showNoting() }
                </div>
            )}
      
        </div>
            <div className='presentation'> </div>
        </header>
  )
}
