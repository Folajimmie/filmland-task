import React from 'react'

export const InputField = ({inputProps, error, ...rest}) => {
  return (
    <div>
        <div className={`w-full flex flex-col py-4 ${
            error ? 'border-red-500' : 'border-gray'
        }`}>
            {/* <input className='p-3 my-2 text-black' {...inputProps} /> */}
        </div>
        {error && <p className="text-error text-caption">{error}</p>}

        
    </div>
  )
}

