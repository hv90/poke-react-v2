import React, { useState, useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import api from 'services/api';
import { CardProps } from 'components/Card';

import { IPokemon, IPokemonSpecies } from './types';
import { Container } from './styles';

interface Props {
  onChange: (d: CardProps, w: string) => void;
}

const SearchBar: React.FC<Props> = ({ onChange }: Props) => {
  const [typedSearch, setTypedSearch] = useState('');
  const [data, setData] = useState<CardProps>();

  let debounceTime: any;

  const debounceTyping = (typedWord: string) => {
    clearTimeout(debounceTime);

    debounceTime = setTimeout(() => {
      setTypedSearch(typedWord);
      console.log(typedSearch);
    }, 1000);
  };

  useEffect(() => {
    if (typedSearch !== '') {
      api.get<IPokemon>(`/pokemon/${typedSearch}`).then(res => {
        if (res.data.name !== '') {
          api
            .get<IPokemonSpecies>(`/pokemon-species/${res.data.name}`)
            .then(result => {
              setData({
                number: res.data.id,
                name: res.data.name,
                types: res.data.types.map(type => type.type.name),
                sprite: res.data.sprites.front_default,
                flavorData: result.data.flavor_text_entries,
              });
            });
        }
      });
    }
  }, [typedSearch]);
  return (
    <Container>
      <div style={{ height: '100%', width: '100%', display: 'flex' }}>
        <input
          className="searchBox"
          type="text"
          placeholder="Got a favorite Pokémon?"
          onChange={e => debounceTyping(e.target.value)}
        />
        <AiOutlineSearch className="searchIcon" />
      </div>
      {data && onChange(data, typedSearch)}
    </Container>
  );
};

export default SearchBar;
