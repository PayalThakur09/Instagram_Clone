'use client' 
import { useEffect, useState } from "react";
import YouTube from "react-youtube";

export const YoutubeVideo = () => {

  const [touchStart, setTouchStart] = useState<any>(null)
  const [touchEnd, setTouchEnd] = useState<any>(null)

  const minSwipeDistance = 50 

const onTouchStart = (e: React.TouchEvent) => {
  setTouchEnd(null) // otherwise the swipe is fired even with usual touch events
  setTouchStart(e.targetTouches[0].clientY)
}

const onTouchMove = (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientY)

const onTouchEnd = () => {
  if (!touchStart || !touchEnd) return
  const distance = touchStart - touchEnd
  const isUpSwipe = distance > minSwipeDistance
  const isDownSwipe = distance < -minSwipeDistance
  if (isUpSwipe || isDownSwipe) console.log('swipe', isUpSwipe ? 'up' : 'down')
  if( isUpSwipe) {
    const newIndex = index === videos.length - 1 ? index : index + 1
    setIndex(newIndex)
  } else if ( isDownSwipe ){
    const newIndex = index === 0 ? index : index - 1
    setIndex(newIndex)
  }
}

  const [index, setIndex] = useState(0);
  const [video, setVideo] = useState(videos[index ?? 0])

  useEffect(()=> {
    setVideo(videos[index ?? 0])
  }, [index])
  const opts = {
    height: '100%',
    Width:'100%',

    playerVars: {
      autoplay: 1,
      playsinline: 1,
  },
};

return (
  <div onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd} style={{height: '100%', minWidth:"100%"}}>
    <YouTube videoId={video} opts={opts} style={{height: '100%'}} />
  </div>
)
}

const videos = [
      'N_FrWkyrnHM' ,
      'G9H2aliqkq8' ,
      'iD_wqjgdQIQ' ,
      'FVrbDxkZXZk' 
];