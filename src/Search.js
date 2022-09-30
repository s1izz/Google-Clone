import React from 'react'
import './Search.css'
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import Button from '@mui/material/Button';

function Search() {
  return (
    <div className='search'>
        <div className='search__input'>
            <SearchIcon className='search__input--icon' />
            <input />
            <MicIcon />
        </div>

        <div className='search__buttons'>
            <Button variant='outlined'>Google Search</Button>
            <Button variant='outlined'>I'm Feeling Lucky</Button>
        </div>

    </div>
  )
}

export default Search