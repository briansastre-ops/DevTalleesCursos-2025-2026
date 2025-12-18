import type { Gif } from "../interfaces/gif.interface";

interface Props {
  gifs: Gif[];
}

const GifsList = ({ gifs }: Props) => {
  return (
    <div className="gifs-container">
      {gifs.map((gif) => (
        <div key={gif.id} className="gif-card">
          <img
            src={gif.url}
            alt={gif.title}
            width={gif.width}
            height={gif.height}
          />
          <p>{gif.title}</p>
        </div>
      ))}
    </div>
  );
};

export default GifsList;
