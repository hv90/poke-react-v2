import React from 'react';
import Container from './styles';

interface IIconProps {
  typeName: string;
  src: string;
}

const InteractiveIcon: React.FC<IIconProps> = ({
  typeName,
  src,
}: IIconProps) => {
  return (
    <Container typeName={typeName}>
      <img src={src} alt={`${typeName} type`} />
    </Container>
  );
};

export default InteractiveIcon;
