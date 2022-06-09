import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide-extension-video/dist/css/splide-extension-video.min.css';
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';
import './Videos.css';

const SPLIDE_OPTIONS = {
  video: {
    autoplay: true,
    mute: true,
  },
  rewind: true,
  // height: "70vh", // set manual height
  heightRatio: 0.5, // Determine height of slides by ratio to a slider width.
};

function Videos() {
  return (
    <section className="multiSection">
      <section>
        <h2>Events</h2>
        <hr />
        <p>Enjoy our events hosted by staff and players alike.</p>
      </section>

      <Splide>
        <SplideSlide>
          <iframe
            width="100%"
            height="700px"
            src="https://www.youtube.com/embed/apCIHrIAtU4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <br></br>
          <br></br>
          <br></br>
          <iframe
            width="100%"
            height="700px"
            src="https://www.youtube.com/embed/nq4tT68UoCg"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <br></br>
          <br></br>
          <br></br>
          <iframe
            width="100%"
            height="700px"
            src="https://www.youtube.com/embed/jYicNMK8PqI"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </SplideSlide>
      </Splide>
    </section>
  );
}

export default Videos;
