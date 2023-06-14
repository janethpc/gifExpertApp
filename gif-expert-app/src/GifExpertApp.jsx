import { useState } from "react"
import {AddCategory} from './components/AddCategory.jsx'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'developer', 'abogada'])

    const onAddCategory = () => {
        setCategories(['valorant', ...categories])
      // setCategories(cat => [...cat, 'valorant'])
    }

    //console.log(categories)

  return (
   <>
    {/** titulo */}
       <h1> Gif Expert App By JanethPC </h1>

       {/** Input */}
       <AddCategory/>

       {/**Listado de gif */}

       <button onClick={ onAddCategory }> Agrega </button>
       <ol>
        { categories.map(category => {
            return <li key={category}>{category}</li>
        }) }
       
        
       </ol>

       {/**Gif item */}
   </> 
  )
}
