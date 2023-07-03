import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [selectedCatagory, setCatagory] = useState("")
  let filteredItems = []

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={(e)=>{setCatagory(e.target.value)}} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {  
          (selectedCatagory === "All" || selectedCatagory === "") ? (
          items.map((item) => (<Item key={item.id} name={item.name} category={item.category} />))):(
          filteredItems = items.filter(item => item.category === selectedCatagory),
          filteredItems.map((item) => (<Item key={item.id} name={item.name} category={item.category}/>))
          )}
      </ul>
    </div>
  );
}

export default ShoppingList;
