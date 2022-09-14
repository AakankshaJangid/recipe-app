import React from 'react'
import './index.css'
function RecipeTile({recipe,index}) {
  return (
    recipe["strMealThumb"].match(/\.(jpeg|jpg|gif|png)$/) != null && 
    (<div className='recipeTile'>
      <img className='recipeTile_img' src={recipe["strMealThumb"]} />
      <p className='recipeTile_name'>{recipe["strMeal"]}</p>
    </div>)
  )
}

export default RecipeTile
