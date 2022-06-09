import React from 'react';
import './Video.css';

function Video(props) {
  return (
    <div className="video-container">
      <iframe
        className={props.full ? 'full-size' : ''}
        title="Video"
        src={props.src}
        frameBorder="1"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default Video;
