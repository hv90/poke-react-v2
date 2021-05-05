import React from 'react';
import Dropdown from './Dropdown';
import { Container } from './styles';

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
interface CardProps {
  name: string;
  number: number;
  sprite: string;
  description: string;
  flavorData: FlavorEntry[];
}

const Card: React.FC<CardProps> = ({
  name,
  number,
  sprite,
  description,
  flavorData,
}: CardProps) => {
  return (
    <Container>
      <img src={sprite} alt={`${name}'s sprite`} />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          height: '100%',
        }}
      >
        <h1>
          {name}

          {` - #${number}`}
        </h1>
        <p>{description}</p>
      </div>
      <Dropdown data={flavorData} />
    </Container>
  );
};

export default Card;
