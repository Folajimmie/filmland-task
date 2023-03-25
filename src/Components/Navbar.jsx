import React from 'react';
import Logo from '../Assets/Logo.svg';
import Menu from '../Assets/Menu.svg';
import Search from './Search';

const Navbar = () => {
  return (
    <div className='w-full flex justify-between items-center z-[100] absolute mt-[1.70rem] px-[6rem]'>
        <img src={Logo} alt="logo icon" className='cursor-pointer'/>

        <Search />

        <div className='flex justify-around gap-2'>
            <h2 className='text-white w-full mt-[1rem]'> Hi, Lawrence</h2>
            <img src={Menu} alt="menu icon" className='mt-[.3rem]'/>
        </div>
    </div>
    
  )
}

export default Navbar