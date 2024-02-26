import { useState } from 'react'
import Search from './components/Search'
import FoodList from './components/FoodList'
import Navbar from './components/Navbar'
import './App.css'
import Container from './components/Container'
import InnerContainer from './components/InnerContainer'
import FoodDetails from './components/FoodDetails'
function App() {
  const [recipeData,setRecipeData] = useState([]);
  const [recipeId,setRecipeId] = useState("");
  return (
    <div className="App">
      <Navbar/>
      {/* Structural Components */}
      <Search recipeData={recipeData} setRecipeData={setRecipeData}/>
      <Container>
        <InnerContainer>
          <FoodList recipeData={recipeData} setRecipeId={setRecipeId}/>
        </InnerContainer>
        <InnerContainer>
          <FoodDetails recipeId={recipeId}/>
        </InnerContainer>
      </Container>
    </div>
  )
}

export default App
