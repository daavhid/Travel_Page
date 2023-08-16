import React,{useState} from 'react';
import Borabora from '../assets/borabora.jpg'
import Borabora2 from '../assets/borabora2.jpg'
import Maldives3 from '../assets/maldives3.jpg'
import Keywest from '../assets/keywest.jpg'

import { BsArrowLeftSquareFill,BsArrowRightSquareFill } from 'react-icons/bs';

const slideData = [
    {
        url: Borabora
    },
    {
        url: Borabora2
    },
    {
        url: Maldives3
    },

]

const Carousel = () => {
    const [slide,setSlide] = useState(0);
    const length = slideData.length;

    const nextSlide = ()=>{
        setSlide(slide === length-1?0:slide+1)
    }
    const prevSlide = ()=>{
        setSlide(slide===0?length-1:slide-1)
    }

  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center items-center '>
        <BsArrowLeftSquareFill onClick={prevSlide} className='absolute top-[50%] text-3xl text-white cursor-pointer left-8 '/>
        <BsArrowRightSquareFill onClick={nextSlide} className='absolute top-[50%] text-3xl text-white cursor-pointer right-8 '/>

        {slideData.map((item,index)=>(
                <div className={index===slide ? 'opacity-100 ' : 'opacity-0'}>
                    
                    {index===slide && (<img className='rounded-md h-full  ' src={item.url} alt="/" />)}
                    
                </div>
            )
           
        )}
    </div>
  )
}

export default Carousel