import React from 'react'
import Item from './Item'
function ItemList({recipeDetail}) {
  return (
    <div>
        {recipeDetail?.extendedIngredients?.map((item)=>(
            <Item item={item} key={Math.random()*Date.now()}/>
        ))}
    </div>
  )
}

export default ItemList
