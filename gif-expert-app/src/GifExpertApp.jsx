import { useState } from "react"
import {AddCategory} from './components/AddCategory.jsx'
import { GifGrid } from "./components/GifGrid.jsx"
import '../src/gifApp.css'

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
      <div className="texto-encabezado text-center">
        <h1 className="titulo"> Gif Expert App </h1>
        <span className="titulo-pink-neon texto-regular">By JanethPC</span>
      </div>

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
