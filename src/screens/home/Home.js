import "./Home.css";
import { useEffect, useState } from "react";
import { retrieveImages } from "../../services";
import { Gallery, Search } from "../../components";

const Home = () => {
  // For card display + pagination
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [imagePerPage] = useState(3);

  // recieve data from API
  useEffect(() => {
    setIsLoading(true);
    retrieveImages().then(({ data: { data } }) => setImages(data));
    setIsLoading(false);
  }, []);

  // Searching logic
  const handleSearch = (string) => {
    retrieveImages(string).then(({ data: { data } }) => setImages(data));
  };

  // Current page items logic
  const lastImageIndex = imagePerPage * currentPage;
  const firstImageIndex = lastImageIndex - imagePerPage;
  const pageItems = images.slice(firstImageIndex, lastImageIndex);

  // change page
  let paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="home">
      <div className="inner">
        <Search handleSearch={handleSearch} />
        {!isLoading ? (
          <Gallery
            images={pageItems}
            paginate={paginate}
            totalItems={images.length}
            imagePerPage={imagePerPage}
          />
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </div>
  );
};

export default Home;
