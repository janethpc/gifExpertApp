import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { useEffect } from "react";


export const GifGrid = ({category}) => {

   const {images, isLoading } = useFetchGifs(category)


    return (
    <>      
            <h1>{category}</h1>
          
            {isLoading ? <p>cargando...</p> : <p>carga completa!!</p>}
          
              
            <div className="card-grid">
            {images.map( (img) => (
                <>
                   <GifItem 
                   key={img.id} 
                   title={img.title}
                   url={img.url}/>
                </>
            ))}
            </div>
            
           
          
    </>
  )
}
