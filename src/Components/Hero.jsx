import axios from 'axios';
import Play from '../Assets/Play.svg'
import React, { useEffect, useState } from 'react'
import {requests, IMAGE_BASE_URL} from '../Config';
import { DefaultButton } from './Buttons';

const Hero = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)]

  useEffect(() => {
    axios.get(requests.POPULAR_BASE_URL).then((res) => {
      setMovies(res.data.results)
    })
  }, []);

  const reduceString = (str, num) => {
    if(str?.length > num) {
      return str.slice(0, num) + '...'
    } else{
      return str
    }
  }

  return (
    <div className='w-full h-[37.5rem] text-black'>
      <div className='w-full h-full'>
        <div className='absolute w-full h-[37.5rem] bg-gradient-to-r from-black'></div>
        <img className='w-full h-full object-cover' src={`${IMAGE_BASE_URL}/original/${movie?.backdrop_path}`} alt={movie?.title} />
        <div className='absolute w-[25.25rem] lg:top-[15%] xl:top-[20%] left-[5%] md:p-8'>
          <p className='text-headline-1 text-white'>{movie?.title}</p>
          <p className='text-title-text text-gray'>Released: {movie?.release_date}</p>
          <p className='text-title-text text-white mt-2'>{reduceString(movie?.overview, 150)}</p>
        <DefaultButton className='w-[10rem] h-[2.25rem] flex justify-center items-center gap-2 mt-4'>
          <div>
            <img src={Play} alt="Play_button" />
          </div>
          <div>
            <p className='text-sub-button w-full'>WATCH TRAILER</p>
          </div>
        </DefaultButton>
      </div>
      </div>
      
    </div>
  )
}

export default Hero