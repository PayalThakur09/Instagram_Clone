import React from 'react'
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchIcon from '@mui/icons-material/Search';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import MovieCreationOutlinedIcon from '@mui/icons-material/MovieCreationOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Link from 'next/link';

const navbar = () => {
  return (
      <BottomNavigation sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 1000, display: 'flex', background: 'black'}}>
       <BottomNavigationAction label="Recents" icon={<HomeOutlinedIcon color="info" />} />
        <BottomNavigationAction label="Recents" icon={<SearchIcon color="info" />} />
        <BottomNavigationAction label="Recents" icon={<AddBoxOutlinedIcon color="info" />} />
        <BottomNavigationAction label="Recents" icon={<MovieCreationOutlinedIcon color="info" />} />
        <Link href="/profile"><BottomNavigationAction label="Recents" icon={<AccountCircleOutlinedIcon color="info" />} /></Link>
      </BottomNavigation>
  ) 
}

export default navbar