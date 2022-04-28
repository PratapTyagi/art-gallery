import React from "react";
import Card from "../card/Card";
import "./Gallery.css";

const Gallery = ({ images }) => {
  console.log(images);
  return (
    <div className="gallery">
      <div className="container">
        {images.map((img) => {
          return <Card key={img.id} image={img} />;
        })}
      </div>
    </div>
  );
};

export default Gallery;
