import { useState } from "react"
import {AddCategory} from './components/AddCategory.jsx'
import { GifGrid } from "./components/GifGrid.jsx"

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'developer', 'abogada'])

    const onAddCategory = (newCategory) => {
      if(categories.includes(newCategory) ) return;
      setCategories([newCategory, ...categories])
    }

    //console.log(categories)

  return (
   <>
    {/** titulo */}
       <h1> Gif Expert App By JanethPC </h1>

       {/** Input */}
       <AddCategory 
        onNewCategory={event => onAddCategory(event)}
       /*setCategories={ setCategories } */
       />

       {/**Listado de gif */}
       
        { categories.map(category => {
            return (
              <GifGrid 
                key={category}
                category={category}  
              />
            )
        }) }
       
        
     

       {/**Gif item */}
   </> 
  )
}
