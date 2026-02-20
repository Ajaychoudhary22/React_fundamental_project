import React, { useContext, useState, useEffect } from 'react'
import RecipesContext from '../Context/RecipeContext'
import { useNavigate, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

const SingleRecipes = () => {

  const navigate = useNavigate()
  const { data, setdata } = useContext(RecipesContext)
  const { register, handleSubmit } = useForm()
  const param = useParams()

  // ✅ Hooks always at top
  const [isFavorite, setIsFavorite] = useState(
    JSON.parse(localStorage.getItem("fav")) || []
  )

  // Find recipe
  const recipe = data?.find(
    (item) => String(item.id) === param.id
  )

  // ✅ Delete Handler (sync with fav)
  const deleteHandler = () => {

    // delete from main recipes
    const deleted = data.filter(
      (recipe) => String(recipe.id) !== param.id
    )

    localStorage.setItem("recipes", JSON.stringify(deleted))
    setdata(deleted)

    // delete from favorites also
    const updatedFav = isFavorite.filter(
      (item) => String(item.id) !== param.id
    )

    localStorage.setItem("fav", JSON.stringify(updatedFav))
    setIsFavorite(updatedFav)

    toast.success("Recipe is deleted")
    navigate("/")
  }

  // ✅ Update Handler
  const submithandle = (formData) => {

    const index = data.findIndex(
      (recipe) => String(recipe.id) === param.id
    )

    if (index === -1) {
      toast.error("Recipe not found")
      return
    }

    const copydata = [...data]

    copydata[index] = {
      ...copydata[index],
      ...formData,
    }

    setdata(copydata)
    localStorage.setItem("recipes", JSON.stringify(copydata))

    toast.success("Recipe updated")
  }

  // ✅ Add to Favorite
  const fav = () => {

    const alreadyFav = isFavorite.find(
      (item) => item.id === recipe.id
    )

    if (alreadyFav) return

    const copyfav = [...isFavorite, recipe]

    localStorage.setItem("fav", JSON.stringify(copyfav))
    setIsFavorite(copyfav)
  }

  // ✅ Remove from Favorite
  const unfav = () => {

    const updatedFav = isFavorite.filter(
      (item) => item.id !== recipe?.id
    )

    localStorage.setItem("fav", JSON.stringify(updatedFav))
    setIsFavorite(updatedFav)
  }

  // Optional mount log
  useEffect(() => {
    console.log("SingleRecipes mounted")
  }, [])

  if (!recipe) {
    return <h1>Recipe not found</h1>
  }

  return (
    <div className='w-full flex p-2'>

      {/* LEFT SIDE */}
      <div className='relative w-1/2 p-10'>

        {isFavorite.find((item) => item.id === recipe.id) ? (
          <i
            onClick={unfav}
            className="absolute right-10 ri-heart-fill text-red-500 text-3xl cursor-pointer"
          ></i>
        ) : (
          <i
            onClick={fav}
            className="absolute right-10 ri-heart-line text-red-500 text-3xl cursor-pointer"
          ></i>
        )}

        <h1 className='text-5xl font-black'>{recipe.title}</h1>
        <img className='w-[20vh]' src={recipe.image} alt="" />
      </div>

      {/* RIGHT SIDE */}
      <form
        className='w-1/4 p-2 flex flex-col'
        onSubmit={handleSubmit(submithandle)}
      >

        <input
          className="border-b outline-0 p-2 mb-5"
          {...register("title")}
          defaultValue={recipe.title}
        />

        <input
          className="border-b outline-0 p-2 mb-5"
          {...register("image")}
          defaultValue={recipe.image}
        />

        <input
          className="border-b outline-0 p-2 mb-5"
          {...register("chef")}
          defaultValue={recipe.chef}
        />

        <textarea
          className="border-b outline-0 p-2 mb-5"
          {...register("description")}
          defaultValue={recipe.description}
        />

        <textarea
          className="border-b outline-0 p-2 mb-5"
          {...register("ingredients")}
          defaultValue={recipe.ingredients}
        />

        <textarea
          className="border-b outline-0 p-2 mb-5"
          {...register("instruction")}
          defaultValue={recipe.instruction}
        />

        <select
          className="border-b outline-0 p-2"
          {...register("category")}
          defaultValue={recipe.category}
        >
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Supper">Supper</option>
          <option value="Dinner">Dinner</option>
        </select>

        <button
          type="submit"
          className="py-2 px-4 bg-blue-700 text-white rounded-md mt-6"
        >
          Update Recipe
        </button>

        <button
          type="button"
          onClick={deleteHandler}
          className="py-2 px-4 bg-red-700 text-white rounded-md mt-6"
        >
          Delete Recipe
        </button>

      </form>
    </div>
  )
}

export default SingleRecipes
