import type { GyphyRandomResponse } from "./data/giphy.response";

const API_KEY = "TD8uu1B0kXTLrVs4PNq5m9Oje4wz9skV";

const myRequest = fetch(
  `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
);


const createImageInsedeDOM = (url:string) => {
    const imgElement = document.createElement("img");
    imgElement.src = url;
    document.body.append(imgElement);
}


myRequest
  .then((response) => response.json())
  .then(({data}: GyphyRandomResponse) => {
    const imagesUrl= data.images.original.url;
    createImageInsedeDOM(imagesUrl);
  })
  .catch((err) => {
    console.error(err);
  });
