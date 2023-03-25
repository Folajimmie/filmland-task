import React from 'react';
import { FaInstagram, FaFacebookSquare, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='w-full h-[145.43px] flex flex-col justify-center items-center mt-5'>
        <div className='flex justify-evenly gap-7 mt-2 cursor-pointer'>
            <FaFacebookSquare />
            <FaInstagram />
            <FaTwitter />
            <FaYoutube/>
        </div>
        <div className='flex justify-between gap-7 mt-5 text-bold'>
            <p>Condition of use</p>
            <p>Privacy & Policy</p>
            <p>Press Room</p>
        </div>
        <div className='mt-5 text-sm'>
            <p>&#169; 2023 movies</p>
        </div>
    </div>
  )
}

export default Footer