import { Fragment } from 'react/jsx-runtime';
import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';

export function App() {
  console.log('Oi');

  return (
    <Fragment>
      <Heading />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, ab
        deserunt, illum assumenda maiores officia consequatur laborum optio sed
        quaerat aperiam quas soluta neque labore explicabo velit, voluptatem
        tempora earum!
      </p>
    </Fragment>
  );
}
