import React from 'react';
import { useState } from 'react';

export default function Cart({cartItems}){
    let [items,setItems] = useState(0);
    let [totalPrice,setTotalPrice] = useState(1)
    let itemClickHandle = ()=>{
        setItems(items+1)
        setTotalPrice(totalPrice+0.5)
    }
    return (
        
        <>
        <div style={{
            position:'absolute'
            ,top:'50%',
            zIndex:'2'
        }}>
            items: {items}
            total price:USD{totalPrice}
            <button onClick={itemClickHandle}>add Items</button>
        </div>
        </>
    )
}