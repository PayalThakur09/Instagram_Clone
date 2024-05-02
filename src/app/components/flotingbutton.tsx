import React from 'react';
import Fab from '@mui/material/Fab';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';

const FloatingButton = () => {
  return (
    <>
      <Fab color="secondary" aria-label="like" sx={{position: 'absolute', right: 10,  bottom: 240}}>
        <FavoriteBorderIcon />
      </Fab>
      <Fab color="secondary" aria-label="comment" sx={{position: 'absolute' , right: 10,  bottom: 170}}>
        <MapsUgcOutlinedIcon />
      </Fab>
      <Fab color="secondary" aria-label="share" sx={{position: 'absolute' , right: 10,  bottom: 100}}>
        <IosShareOutlinedIcon />
      </Fab>
    </>
  );
};

export default FloatingButton;