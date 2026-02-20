import React from 'react'
import { Link } from 'react-router-dom'

const RecipesCrad = ({ Recipes }) => {
  const { id, image, title, Description, chef } = Recipes

  return (
    <Link
      to={`/recipes/details/${id}`}
      className="hover:scale-105 duration-150 w-64 bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 block"
    >
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover"
      />

      {/* Content */}
      <div className="p-4">
        <h1 className="text-lg font-bold text-gray-900 mb-1">
          {title}
        </h1>

        <small className="text-gray-600 block mb-2">
          👨‍🍳 {chef}
        </small>

        <p className="text-sm text-gray-700 leading-relaxed">
          {Description?.slice(0, 100)}...
          <span className="text-blue-600 font-medium"> more</span>
        </p>
      </div>
    </Link>
  )
}

export default RecipesCrad
