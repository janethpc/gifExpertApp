import { useEffect, useState } from "react";
import { getGif } from "../helpers/getGifst";

useEffect

export const GifGrid = ({category}) => {

    const [images, setImages] = useState([])

    const getImages = async() => {
        const newImages = await getGif(category)
        setImages(newImages)
    }

 useEffect(() => {
    getImages()
 }, [ ])

    return (
    <>      
            <h1>{category}</h1>
            <ul>
            {images.map( (img) => (
                <>
                    <li>{img.title}</li>
                </>
            ))}
            </ul>
        
    </>
  )
}
