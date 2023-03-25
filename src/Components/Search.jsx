import React, {useState, useEffect, useRef} from 'react'
import SearchIcon from '../Assets/Search.svg';

const Search = ({ setSearchTerm }) => {
    const [state, setState] = useState('');
    const initial = useRef(true);


    useEffect(() => {
        if (initial.current){
            initial.current = false;
            return;
        }

        const timer = setTimeout(() =>{
            setSearchTerm(state);
        }, 500)

        return () => clearTimeout(timer)
    }, [setSearchTerm, state]);

  return (
    <div className='w-[32.8125rem] h-[2.25rem] mt-[14px] p-2 flex justify-between border border-white rounded-md'>
        <input 
            type='text'
            className='w-full focus:outline-none  bg-transparent'
            placeholder="What do you want to watch?"
            onChange={e => setState(e.currentTarget.value)}
            value={state}
        />
        <img src={SearchIcon} alt='search-icon'/>
    </div>
  )
}

export default Search