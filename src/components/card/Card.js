import React from "react";
import "./Card.css";

const Card = ({ image }) => {
  return (
    <div className="card">
      <img
        src={image?.user?.avatar_url}
        title={image.title}
        alt={image.title}
        width="350"
        height="250"
      />
      <div className="description">
        <p>{image?.user?.display_name}</p>
        <span>{image.source_tld ? image.source_tld : image.type}</span>
      </div>
    </div>
  );
};

export default Card;
