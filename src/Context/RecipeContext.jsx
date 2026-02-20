import React, { createContext, useEffect, useState } from 'react'

const RecipesContext = createContext()

export const RecipeProvider = (props) => {
  const [data, setdata] = useState([])
  
  useEffect(()=>{
  const localdata = localStorage.getItem("recipes")
  if(localdata){
    setdata(JSON.parse(localdata))
  }
  

  },[])

  return (
    <RecipesContext.Provider value={{ data, setdata }}>
      {props.children}
    </RecipesContext.Provider>
  )
}

export default RecipesContext
// image: "https://cdn.dummyjson.com/recipe-images/1.webp",