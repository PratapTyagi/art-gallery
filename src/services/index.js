import axios from "axios";
const URL = "https://api.giphy.com/v1/gifs";

export const retrieveImages = async (query) => {
  if (query) {
    return await axios.get(
      `${URL}/search?api_key=${process.env.REACT_APP_API_KEY}&q=${query}`
    );
  }
  return await axios.get(
    `${URL}/trending?api_key=${process.env.REACT_APP_API_KEY}`
  );
};
