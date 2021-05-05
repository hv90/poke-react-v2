import InteractiveIcon from 'components/InteractiveIcon';
import getIcon from 'helpers/typeIcons';
import React from 'react';
import Dropdown from './Dropdown';
import { Container, SpriteContainer, PokeData } from './styles';

interface FlavorEntry {
  // eslint-disable-next-line camelcase
  flavor_text: string;
  language: {
    name: string;
    url: string;
  };
  version: {
    name: string;
    url: string;
  };
}
export interface CardProps {
  name: string;
  number: number;
  types: string[];
  sprite: string;
  description: string;
  flavorData: FlavorEntry[];
}

const Card: React.FC<CardProps> = ({
  name,
  number,
  types,
  sprite,
  description,
  flavorData,
}: CardProps) => {
  return (
    <Container>
      <SpriteContainer>
        <img src={sprite} alt={`${name}'s sprite`} className="sprite" />
        <p>{`#${number}`}</p>
      </SpriteContainer>
      <PokeData>
        <h1>
          {name}
          {types.map(type => (
            <InteractiveIcon typeName={type} src={getIcon(type)} />
          ))}
        </h1>
        <p>{description}</p>
      </PokeData>
      <Dropdown data={flavorData} />
    </Container>
  );
};

export default Card;
