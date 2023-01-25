import React from "react";
import PropTypes from "prop-types";


const YoutubeEmbed = ({ embedId }) => (

    <iframe
      style={{ width: "100%", height: "100%" ,position: "relative" ,  }}
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Videos"
    />
 
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;