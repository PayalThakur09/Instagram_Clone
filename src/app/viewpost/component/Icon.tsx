'use client'
import React, { useState } from "react";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';

function Icon() {

    const [like, setLike] = useState(false)

    const handleLike = () => {
      setLike(!like);
    };

    return(
        <>
          {like ? <FavoriteBorderOutlinedIcon onClick={handleLike} /> : <FavoriteOutlinedIcon onClick={handleLike}/> }
          
        </>
    );
}

export default Icon;

