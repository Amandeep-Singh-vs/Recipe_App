import React from 'react'
import styles from './fooditem.module.css'
import { NavLink } from 'react-router-dom'
function FoodItem({recipe,setRecipeId}) {
  return (
    <div className={styles.itemContainer}>
      <img src={recipe.image} alt="" className={styles.itemImage}/>
      <div className={styles.itemContent}>
        <p className={styles.itemName}>{recipe.title}</p>
      </div>
      <div className={styles.buttonContainer}>
        <NavLink to={`/food-details/${recipe.id}`}>
          <button onClick={()=>{setRecipeId(recipe.id)}} className={styles.itemButton}>View Recipe</button>
        </NavLink>
      </div>
    </div>
  )
}

export default FoodItem
