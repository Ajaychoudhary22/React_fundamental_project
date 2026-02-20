import React from 'react'
import RecipesContext from '../Context/RecipeContext'
import RecipesCrad from '../Components/RecipesCrad'
import { useContext } from 'react'


const Fav = () => {
     const favdata = JSON.parse(localStorage.getItem("fav")) || []
     
  const renderRecipes = favdata.map(recipe => (
    <RecipesCrad key={recipe.id} Recipes={recipe} />
  ))    
 
  return (

  

  
    <div className="flex flex-wrap gap-6">
      {favdata.length > 0 ? renderRecipes : <h1 className='text-3xl font-bold'>No Favorite Recipes</h1>     }
    </div>
  )
} 

export default Fav 
   