import { useState,lazy, Suspense } from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Search from './components/Search'
import Navbar from './components/Navbar'
const FoodList  = lazy(()=>import('./components/FoodList'))
import './App.css'
const FoodDetails = lazy(()=>import('./components/FoodDetails'))
import Loader from './components/Loader'
function App() {
  const [recipeData,setRecipeData] = useState([]);
  const [recipeId,setRecipeId] = useState("");
  return (
    <Router>
      <div className="App">
        <Navbar/>
        {/* Structural Components */}
        <Search recipeData={recipeData} setRecipeData={setRecipeData}/>
        <Suspense fallback={<Loader/>}>
          <Routes>
            <Route exact path="/" element={
              <FoodList recipeData={recipeData} setRecipeId={setRecipeId}/>
            }/>
            <Route path="/food-details/:id" element={
              <FoodDetails recipeId={recipeId}/>
            }/>
          </Routes>
        </Suspense>
      </div>
    </Router>
    
  )
}

export default App
