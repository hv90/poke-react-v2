import React, { useState, useEffect } from 'react';
import Card, { CardProps } from 'components/Card';
import Header from 'components/Header'; /*
import CardDefaultProps from 'mock/card'; */
import SearchBar from 'components/SearchBar';
import spinner from 'static/images/loader.png';
import { LoaderContainer, NoResultCard } from './Styles';

const App: React.FC = () => {
  const [data, setData] = useState<CardProps>();
  const [typedSearch, setTypedSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const handleData = (pokemonData: CardProps, word: string) => {
    setData(pokemonData);
    setTypedSearch(word);
  };
  useEffect(() => {
    // do nothing
  }, [typedSearch]);
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
          onChange={(pokemonData: CardProps, word: string) => {
            return handleData(pokemonData, word);
          }}
          isFetching={(isFetching: boolean) => setLoading(isFetching)}
        />

        {typedSearch !== '' && !loading && data && !(data?.number === -666) && (
          <Card {...data} />
        )}
        {typedSearch !== '' && loading && (
          <LoaderContainer>
            <img className="spinner" src={spinner} alt="loading..." />
          </LoaderContainer>
        )}
        {typedSearch !== '' && !loading && data?.number === -666 && (
          <NoResultCard>
            <p className="noResult">No PokéDex matches</p>
          </NoResultCard>
        )}
      </div>
    </div>
  );
}; // TODO: implement dynamic Card props

export default App;
