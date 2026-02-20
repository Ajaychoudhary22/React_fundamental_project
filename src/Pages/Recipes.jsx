import React, { useContext } from 'react'
import RecipesContext from '../Context/RecipeContext'
import RecipesCrad from '../Components/RecipesCrad'

const Recipes = () => {
  const { data } = useContext(RecipesContext)

  const renderRecipes = data.map(recipe => (
    <RecipesCrad key={recipe.id} Recipes={recipe} />
  ))

  return (
    <div className="flex flex-wrap gap-6">
      {renderRecipes}
    </div>
  )
}

export default Recipes
