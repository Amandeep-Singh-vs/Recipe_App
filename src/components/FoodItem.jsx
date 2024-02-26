import React from 'react'
import styles from './fooditem.module.css'
function FoodItem({recipe,setRecipeId}) {
  return (
    <div className={styles.itemContainer}>
      <img src={recipe.image} alt="" className={styles.itemImage}/>
      <div className={styles.itemContent}>
        <p className={styles.itemName}>{recipe.title}</p>
      </div>
      <div className={styles.buttonContainer}>
        <button onClick={()=>{setRecipeId(recipe.id)}} className={styles.itemButton}>View Recipe</button>
      </div>
    </div>
  )
}

export default FoodItem
