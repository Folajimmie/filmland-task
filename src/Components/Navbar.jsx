import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../Assets/Logo.svg';
import Menu from '../Assets/Menu.svg';
import { UserAuth } from '../Context/AuthContext';
import { DefaultButton } from './Buttons';
import Search from './Search';

const Navbar = () => {  
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='w-full flex justify-center items-center lg:gap-[1rem] xl:gap-[9.5rem] xl:left-[5%]  z-[100] absolute mt-[1.70rem] '>
      <Link to='/'>
        <img src={Logo} alt="logo icon" className='cursor-pointer'/>
      </Link>
        

        <Search />

        {user?.email ? (
          <div className='flex justify-around gap-2'>
          <h2 className='text-white w-full mt-[1rem]'> Hi, Lawrence</h2>
          <img src={Menu} alt="menu icon" className='mt-[.5rem]' onClick={handleLogout}/>
      </div>
        ) : (
          <div className='flex gap-2'>
            <Link to='/login'>
              <DefaultButton className='w-[90px]'>
                <p>Sign In</p>
              </DefaultButton>
            </Link>

            <Link to='/signup'>
              <DefaultButton className='w-[90px]'>
                <p>Sign Up</p>
              </DefaultButton>
            </Link>
        </div>
        )};  
    </div>
    
  );
};

export default Navbar