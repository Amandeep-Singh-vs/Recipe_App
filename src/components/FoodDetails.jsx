import React, { useEffect, useState } from 'react'
import styles from './fooddetails.module.css'
import ItemList from './ItemList';
function FoodDetails({recipeId}) {
    const recipeDetailUrl = `https://api.spoonacular.com/recipes/${recipeId}/information`
    const api_key = 'd0c71fb2a9684c2e94d03fef2704ac80'
    const [recipeDetail,setRecipeDetail] = useState({});
    const [isLoading,setIsLoading] = useState(true)
    useEffect(()=>{
        if(!recipeId || recipeId===null)
        {
            setRecipeDetail({});
            return;
        }
        async function getRecipeData(){
            try {
                const res = await fetch(`${recipeDetailUrl}?apiKey=${api_key}`);
                console.log(res)
                const data = await res.json();
                console.log(data)
                setRecipeDetail(data)
                setIsLoading(false)
            } catch (error) {
                console.log(error)
            }
        }
        getRecipeData()
    },[recipeId])
  return (
    <div>
        {(isLoading && recipeDetail!={}) ? (<></>) : (
        <div className={styles.recipeCard}>
            <h1 className={styles.recipeName}>{recipeDetail?.title}</h1>
            <img className={styles.recipeImg} src={recipeDetail?.image} alt="" />
            <div className={styles.recipeDetails}>
                <span>
                    <strong>⏱️ {recipeDetail.readyInMinutes}</strong>
                </span>
                <span>
                    <strong>👩‍👩‍👦‍👦 Serves {recipeDetail.servings} People</strong>
                </span>
                <span>
                    <strong>
                    {
                        recipeDetail.vegetarian ? "🥕 Vegetarian" : "🍗 Non-Vegetarian"
                    }
                    </strong>
                </span>
                <span>
                    <strong>
                    {
                        recipeDetail.vegan ? "🐄 Vegan"  : "🐖 Non-Vegan"
                    }
                    </strong>
                </span>
            </div>
            <div>
                <span>💲{(recipeDetail.pricePerServing/100).toPrecision(6)} per serving</span>
            </div>
            <h2>Ingredients</h2>
            <ItemList recipeDetail={recipeDetail}/>
            <h2>Instructions</h2>
            {recipeDetail?.analyzedInstructions[0]===undefined?(<></>):(<div className={styles.recipeInstructions}>
                <ol>
                    {recipeDetail?.analyzedInstructions[0]?.steps?.map((step)=>(
                        <li key={Math.random()*Date.now()}>{step?.step}</li>
                    ))}
                </ol>
            </div>)}
      </div>
    )}
    </div>
  )
}

export default FoodDetails
