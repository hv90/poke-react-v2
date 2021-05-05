import React, { useState } from 'react';
import Card, { CardProps } from 'components/Card';
import Header from 'components/Header'; /*
import CardDefaultProps from 'mock/card'; */
import SearchBar from 'components/SearchBar';

const App: React.FC = () => {
  const [data, setData] = useState<CardProps>();
  const [typedSearch, setTypedSearch] = useState('');
  const handleData = (pokemonData: CardProps, word: string) => {
    setData(pokemonData);
    setTypedSearch(word);
  };
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
          onChange={(pokemonData: CardProps, word: string) =>
            handleData(pokemonData, word)
          }
        />

        {data && <Card {...data} />}
        {typedSearch && !data && <p className="noResult">No PokéDex matches</p>}
      </div>
    </div>
  );
}; // TODO: implement dynamic Card props

export default App;
