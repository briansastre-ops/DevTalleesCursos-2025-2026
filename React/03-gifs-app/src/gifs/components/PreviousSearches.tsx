import React, { type FC } from "react";
interface Props {
  searches: string[];

  onLabelClick: (term: string) => void;
}
const PreviousSearches: FC<Props> = ({ searches, onLabelClick }) => {
  return (
    <div className="previous-searches">
      <h2 className="">busquedas previas</h2>
      <ul>
        {searches.map((term) => (
          <li key={term} onClick={() => onLabelClick(term)}>
            {term}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PreviousSearches;
