import React from 'react';
import Card from 'components/Card';
import Header from 'components/Header';
import CardDefaultProps from 'mock/card';

const App: React.FC = () => (
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
      <Card {...CardDefaultProps} />
    </div>
  </div>
); // TODO: implement dynamic Card props

export default App;
