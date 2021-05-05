import React, { useState } from 'react';
import Card, { CardProps } from 'components/Card';
import Header from 'components/Header'; /*
import CardDefaultProps from 'mock/card'; */
import SearchBar from 'components/SearchBar';

const App: React.FC = () => {
  const [data, setData] = useState<CardProps>();
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

        {data && <Card {...data} />}
      </div>
    </div>
  );
}; // TODO: implement dynamic Card props

export default App;
