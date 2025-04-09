import './styles/theme.css';
import './styles/global.css';
import { Fragment } from 'react/jsx-runtime';

import { Heading } from './components/Heading';
import { Container } from './components/Container';

export function App() {
  return (
    <Fragment>
      <Container>
        <Heading>LOGO</Heading>
      </Container>
      <Container>
        <Heading>MENU</Heading>
      </Container>
    </Fragment>
  );
}
