import React from 'react'
import MacWindow from './MacWindow'
import "./spotify.scss"

const Spotify = ({ windowName, setWindowState }) => {
  return (
   <MacWindow width='25vw' windowName={windowName} setWindowState={setWindowState}>
    <div className='spotify-window'>
        <iframe data-testid="embed-iframe" style={{borderRadius: "12px"}} src="https://open.spotify.com/embed/playlist/41G0hwfQIeEKAfdp7kFShY?utm_source=generator&si=e129fae0e74b4a9c" width="100%" height="352" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>
   </MacWindow>
  )
}

export default Spotify