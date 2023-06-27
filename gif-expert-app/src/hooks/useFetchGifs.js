import { getGif } from "../helpers/getGifst";
import { useEffect, useState } from "react";


export const useFetchGifs = (category) => {

    const [images, setImages] = useState([])

    const getImages = async() => {
        const newImages = await getGif(category)
        setImages(newImages)
    }

 useEffect(() => {
    getImages()
 }, [ ])


  return {
    images: images,
    isLoading: true
  }
}
