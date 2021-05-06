import React, { useEffect, useState } from 'react';
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
          onChange={(pokemonData: CardProps, word: string) => {
            return handleData(pokemonData, word);
          }}
          isFetching={(isFetching: boolean) => setLoading(isFetching)}
        />

        {typedSearch !== '' &&
          !loading &&
          data &&
          !saved.find(card => data.name === card.name) &&
          !(data?.number === -666) && (
            <Card
              {...data}
              saved={false}
              onToggleSave={saveCard}
              key={`${data.name}-f`}
            />
            // eslint-disable-next-line indent
          )}
        {typedSearch !== '' && loading && (
          <LoaderContainer>
            <img className="spinner" src={spinner} alt="loading..." />
          </LoaderContainer>
        )}
        {typedSearch !== '' && !loading && data?.number === -666 && (
          <p className="noResult">No PokéDex matches</p>
        )}
        {/* {data && !saved.find(card => data.name === card.name) && (
          <Card
            {...data}
            saved={false}
            onToggleSave={saveCard}
            key={`${data.name}-f`}
          />
        )} */}
        {saved.map(savedData => (
          <Card
            {...savedData}
            saved
            onToggleSave={removeCard}
            key={`${savedData.name}-t`}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
