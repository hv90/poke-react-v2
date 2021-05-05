import React, { useEffect, useState } from 'react';
import Card, { CardProps } from 'components/Card';
import Header from 'components/Header'; /*
import CardDefaultProps from 'mock/card'; */
import SearchBar from 'components/SearchBar';

const App: React.FC = () => {
  const [data, setData] = useState<CardProps>();
  const [saved, setSaved] = useState<CardProps[]>([]);

  const saveCard = (newCard: CardProps) => {
    setSaved(prevState => [...prevState, newCard]);
  };

  const removeCard = (target: CardProps) => {
    setSaved(prevState => prevState.filter(card => card.name !== target.name));
  };
  useEffect(() => console.log('saved cards: ', saved), [saved]);
  return (
    <div>
      <Header />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          placeContent: 'center',
          placeItems: 'center',
        }}
      >
        <SearchBar
          onChange={(pokemonData: CardProps) => setData(pokemonData)}
        />

        {data && !saved.find(card => data.name === card.name) && (
          <Card
            {...data}
            saved={false}
            onToggleSave={saveCard}
            key={data.name + '-f'}
          />
        )}
        {saved.map(savedData => (
          <Card
            {...savedData}
            saved
            onToggleSave={removeCard}
            key={savedData.name + '-t'}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
