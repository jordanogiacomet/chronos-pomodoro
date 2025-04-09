import './styles/theme.css';
import './styles/global.css';

import { Fragment } from 'react/jsx-runtime';
import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { DefaultInput } from './components/DefaultInput';
import { Cycles } from './components/Cycles';
import { DefaultButton } from './components/DefaultButton';
import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';

export function App() {
  return (
    <Fragment>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Menu />
      </Container>
      <Container>
        <CountDown />
      </Container>
      <Container>
        <form className='form'>
          <div className='formRow'>
            <DefaultInput
              labelText='Task'
              id='meuInput'
              type='text'
              placeholder='Digite algo'
            />
          </div>
          <div className='formRow'>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className='formRow'>
            <Cycles />
          </div>
          <div className='formRow'>
            <DefaultButton icon={<PlayCircleIcon />} />
            <DefaultButton icon={<StopCircleIcon />} color='red' />
          </div>
        </form>
      </Container>
    </Fragment>
  );
}
