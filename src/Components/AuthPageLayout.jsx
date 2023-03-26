import React from 'react'
import Wallpaper from '../Assets/bgImage.jpg'

const AuthPageLayout = ({children, pageTitle}) => {
  return (
    <>
    <div className='w-full h-screen'>
        <img src={Wallpaper} alt="/" className='hidden sm:block absolute w-full h-full object' />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
        <div className='relative w-full px-4 py-24 z-50'>
          <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
            <div className='max-w-[320px] mx-auto py-16'>
              <h1 className='text-headline-2 text-center'>{pageTitle}</h1>
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AuthPageLayout