import React from 'react'
import FilterAltIcon from '@mui/icons-material/FilterAlt';

const Interface = () => {
  return (
    <div>
        <div className='bg-red-500 h-14 flex justify-center'>
            <h1 className='font-bold text-3xl p-2'>Todo-List</h1>
        </div>
        <div className='relative float-right'>
            <input type="search" className='border-2 border-black m-3' />
            <FilterAltIcon/>
        </div>
        <div className='bg-zinc-200 m-3 h-6 w-40'>
            <h1>To-do</h1>
        </div>
    </div>
  )
}

export default Interface