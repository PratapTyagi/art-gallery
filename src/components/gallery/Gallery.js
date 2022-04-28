import React from "react";
import Card from "../card/Card";
import Pagination from "../pagination/Pagination";
import "./Gallery.css";

const Gallery = ({ images, paginate, totalItems, imagePerPage }) => {
  return (
    <div className="gallery">
      <div className="container">
        {images.map((img) => {
          return <Card key={img.id} image={img} />;
        })}
      </div>
      <Pagination
        totalItems={totalItems}
        paginate={paginate}
        imagePerPage={imagePerPage}
      />
    </div>
  );
};

export default Gallery;
