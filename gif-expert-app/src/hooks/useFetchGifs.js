import { getGif } from "../helpers/getGifst";
import { useEffect, useState } from "react";


export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async() => {
        const newImages = await getGif(category);
        setImages(newImages);
        setIsLoading(false);
    }

 useEffect(() => {
    getImages()
 }, [])


  return {
    images: images,
    isLoading: isLoading
  }
}
