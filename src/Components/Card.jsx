import React, { useState } from 'react';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../Config';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const Card = ({item}) => {
    const [like, setLike] = useState(false);

  return (
    <div className='border border-gray rounded-md sm:w-full sm:block md:w-[225px] md:inline-block lg:w-[250px] lg:inline-block cursor-pointer relative p-2'>
        <img className='w-full h-auto block' src={`${IMAGE_BASE_URL}/${POSTER_SIZE}/${item?.poster_path}`} alt={item.title} />
        <p className='mt-2 overflow-hidden font-bold'>{item.title}</p>
        <p className='mt-2'><span className='font-extrabold'>Rating:</span> {item.vote_average}</p>
        <p className='mt-2'><span className='font-extrabold'>Release Date:</span> {item.release_date}</p>
        <p className='mt-2'><span className='font-extrabold'>Language:</span> <span className='text-red-600'>{item.original_language}</span></p>
        <p className=''>
          {like ? (
            <FaHeart className='absolute top-4 right-4 text-gray' />
          ) : (
            <FaRegHeart className='absolute top-4 right-4 text-gray' />
          )}
        </p>
    </div>
  )
}

export default Card