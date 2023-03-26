import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthPageLayout from '../Components/AuthPageLayout'
import { DefaultButton } from '../Components/Buttons'
import { UserAuth } from '../Context/AuthContext'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { logIn } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await logIn(email, password);
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthPageLayout pageTitle='Sign In'>
        <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className='p-3 my-2 bg-gray-700 rouded text-black'
            type='email'
            placeholder='Email'
            autoComplete='email'
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            className='p-3 my-2 bg-gray-700 rouded text-black'
            type='password'
            placeholder='Password'
            autoComplete='current-password'
          />

          <DefaultButton className='mt-9'>
            Sign In
          </DefaultButton>

          <p className='py-4 mt-9'><span className='text-gray'>Don't have an account?</span>{' '}
          <Link to='/signup'>
            Sign Up
          </Link> </p>
        </form>
      </AuthPageLayout>
  )
}

export default Login