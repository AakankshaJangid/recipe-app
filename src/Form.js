import React, { useState } from 'react'
import axios from "axios";

import './index.css'
import RecipeTile from './RecipeTile';
function Form() {
    const [query,setQuery] = useState("")
    const [recipes,setRecipes] = useState([])
    var url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${query}`;
    
    async function getRecipes(){
    var result = await axios.get(url);
    if(result.data.meals==='null'){
      setRecipes("No recipe found ")
      console.log("No recipe found ")
    } else{
      setRecipes(result.data.meals)
    }
    // setRecipes(result.data.meals)
    console.log(result.data)
  }
  // function getRecipes(){
  //   axios.get(url)
  //   .then(response => {
  //       console.log(response)
  //       // if(response.data.meals === 'null'){
  //       //   console.log("error")
  //       // }
  //       setRecipes(response.data.meals)
  //       if (recipes === true) {
  //         isFound = false;
  //       }
  //   })
  //   .catch(error =>{
  //       console.log(error)
  //       setRecipes('Error retreiving data')
  //   })

  // }
  const onSubmit = (e) =>{
    e.preventDefault();
    getRecipes();
  }
  return (
    <div>
      <form className='searchForm' onSubmit={onSubmit}>
        <input 
        type={'text'} 
        className="ingridientInput"
        placeholder="Enter ingridient" 
        value={query} onChange={(e)=>setQuery(e.target.value)}
        />
        <input
        type={"submit"}
        value="Search" 
        className='submit-btn'
        />
      </form>
      {/* <div className='app_recipes'>
        {recipes.map((recipe,index) => {
            return <RecipeTile recipe={recipe} key={index}/>
        })}
      </div> */}
      <div className='Sub-heading'>
      {<h2>Recipes👨‍🍳!!!!!!!!!!!</h2>}
      </div>
      <div className='app_recipes'>
        {recipes.map((recipe,index) => {
            return <RecipeTile recipe={recipe} key={index}/>
        })}
      </div>
    </div>
  )
}

export default Form
