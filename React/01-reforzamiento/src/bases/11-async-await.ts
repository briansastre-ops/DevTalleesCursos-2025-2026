import type { GyphyRandomResponse } from "./data/giphy.response";

const API_KEY = "TD8uu1B0kXTLrVs4PNq5m9Oje4wz9skV";

const createImageInsedeDOM = (url: string) => {
  const imgElement = document.createElement("img");
  imgElement.src = url;
  document.body.append(imgElement);
};

const getRandomGifUrl = async (): Promise<string> => {
  const myResponse = await fetch(
    `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
  );
  const { data } = (await myResponse.json()) as GyphyRandomResponse;
  return data.images.original.url;
};

getRandomGifUrl().then(createImageInsedeDOM)
