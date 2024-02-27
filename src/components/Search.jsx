import React, { useEffect, useState,useRef } from 'react'
import styles from './search.module.css'
const URL = 'https://api.spoonacular.com/recipes/complexSearch';
const API_KEY = 'd0c71fb2a9684c2e94d03fef2704ac80'
function Search({recipeData,setRecipeData}) {
    const [query,setQuery] = useState('pasta');
    const loadingRef = useRef(null);
    // Because of strict mode, the react calls useEffect two times
    useEffect(()=>{
        async function getRecipes(){
            loadingRef.current.style.display = 'block';
            const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
            const data = await res.json();
            setRecipeData(data?.results)
            loadingRef.current.style.display = 'none';
        }
        getRecipes()
    },[query])
  return (
    <div className={styles.searchContainer}>
      <input type='text' placeholder='Enter recipe name here...' value={query} onChange={(e)=>setQuery(e.target.value)} className={styles.input}/>
      <div ref={loadingRef} style={{ display: 'none', color:'rgba(21, 173, 33, 0.564)', fontSize:'50px'}}>Loading...</div>
    </div>
  )
}

export default Search
