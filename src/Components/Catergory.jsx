import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from './Card';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const Catergory = ({title, fetchURL, catergoryID}) => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios.get(fetchURL).then((res) => {
            setMovies(res.data.results)
        })
    }, [fetchURL]);

    const slideLeft = () => {
        var slider = document.getElementById('slider' + catergoryID);
        slider.scrollLeft = slider?.scrollLeft - 500;
      };
      const slideRight = () => {
        var slider = document.getElementById('slider' + catergoryID);
        slider.scrollLeft = slider?.scrollLeft + 500;
      };

  return (
    <div className='px-[95px] mt-[57px]'>
        <div className='flex justify-between'>
            <div>
                <p className='text-headline-2 text-black'>
                    {title}
                </p>
            </div>
            <div>
                <p className='mt-3 text-red-500 cursor-pointer'>See more &gt;</p>
            </div>
        </div>
        <div className='relative flex items-center group mt-4'>
        <MdChevronLeft
          onClick={slideLeft}
          className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
          size={40}
        />
            <div id={'slider' + catergoryID} className='w-full h-full flex sm:gap-4 lg:gap-[5rem] overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                {movies?.map((item, id) => (
                    <Card key={id}  item={item} />
                ))}
            </div>
            <MdChevronRight
                onClick={slideRight}
                className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
                size={40}
            />
        </div>
    </div>
  )
}

export default Catergory