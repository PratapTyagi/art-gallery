import "./Home.css";
import { useEffect, useState } from "react";
import { retrieveImages } from "../../services";
import { Gallery, Pagination, Search } from "../../components";

const Home = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    retrieveImages().then(({ data: { data } }) => setImages(data));
  }, []);
  return (
    <div className="home">
      <div className="inner">
        <Search />
        <Gallery images={images} />
        <Pagination />
      </div>
    </div>
  );
};

export default Home;
