import React, { useState } from "react";

function Item({ name, category }) { 
  // const [newCart, setNewCart] = useState([])
  const [inCart, setinCart] = useState(false)
  const isInCart = inCart ? "in-cart" : ""
  const btnText = inCart ? "Remove From Cart" : "Add to Cart"
  
  return (
    <li className={isInCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={() => addItem(name)} className="add">{btnText}</button>
    </li>
  );

  function addItem(itemName){
    const newIsInCart = !inCart
    // let updatedCart
    
    // if(inCart === false){
    //   console.log(inCart)
    //   updatedCart = [...newCart, itemName]
    //   setNewCart(updatedCart)
    // }else{
    //   updatedCart = [...newCart].filter(item =>{ return item !== itemName})
    //   setNewCart(updatedCart)
    // }
    setinCart(newIsInCart)
  }
}

export default Item;
