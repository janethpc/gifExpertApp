import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";



export const GifGrid = ({category}) => {

   const {images, isLoading } = useFetchGifs(category)


    return (
    <>      
  
            <h1>{category}</h1>
          
            {isLoading ? <p>cargando...</p> : <p>carga completa!!</p>}
          
            
            <div className="row">
            {images.map( (img) => (
                <>
                <div className="col-3">
                   <GifItem 
                   key={img.id} 
                   title={img.title}
                   url={img.url}/>
                   </div>
                </>
            ))}
            </div>
            
           
      
    </>
  )
}
