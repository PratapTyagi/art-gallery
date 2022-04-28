import { useEffect, useState } from "react";
import { retrieveImages } from "../../services";

const Home = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    retrieveImages().then(({ data: { data } }) => setImages(data));
  }, []);
  return <div className="home"></div>;
};

export default Home;
