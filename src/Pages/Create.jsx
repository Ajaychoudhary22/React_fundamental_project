import { nanoid } from 'nanoid'
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import RecipesContext from '../Context/RecipeContext'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Create = () => {
 const navigate=  useNavigate()
  const { data, setdata } = useContext(RecipesContext)
  const { register, handleSubmit, reset } = useForm()

  const submithandle = (Recipe) => {
    Recipe.id = nanoid()
    const copydata = [...data]
    copydata.push(Recipe)
    setdata(copydata)
    localStorage.setItem("recipes", JSON.stringify(copydata))
    toast.success("Recipe is crated")
    reset()
    navigate("/Recipes")
   
    
  }

  return (
    <form onSubmit={handleSubmit(submithandle)}>
      <input
        className="border-b outline-0 p-2 mb-5"
        {...register("title")}
        type="text"
        placeholder="Enter your Recipes"
      />
      <br />


      <input
        className="border-b outline-0 p-2"
        {...register("image")}
        type="text"
        placeholder="Enter image url"
      />
      <br />
      <small className="text-red-400 mb-5">the error is shown here</small>

      <br />
       <input
        className="border-b outline-0 p-2 mb-5"
        {...register("chef")}
        type="text"
        placeholder="Enter your chef name"
      />
      <br />


      <textarea
        className="border-b outline-0 p-2"
      {...register("Description")}
        placeholder="Recipes description"
      ></textarea>
      <br />
      <small className="text-red-400">the error is shown here</small>

      <br />

      <textarea
        className="border-b outline-0 p-2"
        {...register("ingridiants")}
        placeholder="wriiting ingidiants"
      ></textarea>
      <br />
      <small className="text-red-400">the error is shown here</small>

      <br />

      <textarea
        className="border-b outline-0 p-2"
        {...register("instruction")}
        placeholder="write the recipes instruction"
      ></textarea>

      <br />

      <select
        className="border-b outline-0 p-2"
        {...register("category")}
      >
        <option value="Breakfast">Breakfast</option>
        <option value="lunch">lunch</option>
        <option value="supper">Supper</option>
          <option value="dinner">Dinner</option>
      </select>

      <br />

      <button className="py-2 px-4 bg-zinc-900 rounded-md mt-6 block">
        save Recipe
      </button>
    </form>
  )
}

export default Create
