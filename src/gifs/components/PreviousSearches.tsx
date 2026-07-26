interface Props {
  searches: string[];
  OnLabelClicked: (term: string) => void;
}

export const PreviousSearches = ({ searches, OnLabelClicked }: Props) => {
  return (
    <div className="previous-searches">
      <h2>Busquedas Previas</h2>
      <ul className="previous-searches-list">
        {searches.map((term) => (
          <li key={term} onClick={() => OnLabelClicked(term)}>
            {term}
          </li>
        ))}
      </ul>
    </div>
  );
};
