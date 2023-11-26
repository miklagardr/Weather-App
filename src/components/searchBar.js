import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFeatherPointed } from '@fortawesome/free-solid-svg-icons'



function SearchBar({onSubmit}) {
  
  const [city , setCity] = useState(''); 

  const handleSubmit = (e) => {
    e.preventDefault(); 
    setCity('');
    onSubmit(city); 
  }


  return (
    <div >
        <div className='nav  flex items-center justify-center'>

              <FontAwesomeIcon icon={faFeatherPointed} size="2xl" className='ml-4' /> 
            
            <h1 className='h1 text-center p-6 text-white text-3xl font-thin tracking-widest '>
                  WEATHER
            </h1>
        </div>
        
  
        <form className='flex items-center justify-center my-20' onSubmit = {handleSubmit} >
            <input className = 'w-96 p-3 border border-blue-500 focus:outline-none' onChange={ (e) => { setCity(e.target.value) } } value={city} type='search' />
            <button className='border bg-blue-600 text-white rounded ml-3 px-4 py-3 ' type='submit' >Search</button>
        </form>

    </div>
  )
}

export default SearchBar ;