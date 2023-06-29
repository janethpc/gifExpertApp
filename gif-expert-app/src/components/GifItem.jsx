import Image from 'react-bootstrap/Image';



export const GifItem = ({title, url}) => {
  return (
    <>
    <div className="card">
        <Image src={url} alt={title} thumbnail/>
        <p className='text-center'>{title}</p>
    </div>
            
    </>
  )
}
