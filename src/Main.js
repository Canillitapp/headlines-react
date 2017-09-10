import React from 'react';
import { Container } from '@cerebral/react';
import controller, { load } from './config/controller';
import { bootstrap } from './config/bootstrap';
import App from './App';

function Main() {
  return (
    <Container controller={controller}>
      <App />
    </Container>
  );
}

bootstrap();
load();

export default Main;
