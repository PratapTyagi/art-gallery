import axios from "axios";
const URL = "https://api.giphy.com/v1/stickers/search";

export const retrieveImages = async () => {
  return await axios.get(
    `${URL}?api_key=${process.env.REACT_APP_API_KEY}&q=cheeseburgers`
  );
};
