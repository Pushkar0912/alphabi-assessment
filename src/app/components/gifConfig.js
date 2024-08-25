import axios from 'axios';

const GIPHY_API_KEY = 'GlVGYHkr3WSBnllca54iNt0yFbjz7L65';
const GIPHY_API_URL = 'https://api.giphy.com/v1/gifs/search';

export const fetchGifs = async (query) => {
  const response = await axios.get(GIPHY_API_URL, {
    params: {
      api_key: GIPHY_API_KEY,
      q: query,
      limit: 9
    }
  });
  // console.log(res)
  return response.data.data;
};
