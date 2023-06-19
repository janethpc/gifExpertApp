import { useState } from "react"
import {AddCategory} from './components/AddCategory.jsx'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'developer', 'abogada'])

    

    //console.log(categories)

  return (
   <>
    {/** titulo */}
       <h1> Gif Expert App By JanethPC </h1>

       {/** Input */}
       <AddCategory setCategories={ setCategories }/>

       {/**Listado de gif */}

     
       <ol>
        { categories.map(category => {
            return <li key={category}>{category}</li>
        }) }
       
        
       </ol>

       {/**Gif item */}
   </> 
  )
}
