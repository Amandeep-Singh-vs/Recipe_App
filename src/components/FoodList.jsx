import React from 'react'
import FoodItem from './FoodItem'
import {useState} from 'react';
import Pagination from './Pagination';
import styles from './foodlist.module.css'
function FoodList({recipeData,setRecipeId}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex-itemsPerPage;
  const currentItems = recipeData?.slice(firstIndex, lastIndex);
  return (
    <div className={styles.itemList}>
      {
        currentItems?.map((recipe)=>(
          <FoodItem key={recipe.id} recipe={recipe} setRecipeId={setRecipeId}/>
        ))
      }
      <Pagination totalItems={recipeData?.length} itemsPerPage={itemsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
    </div>
  )
}

export default FoodList
