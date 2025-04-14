import './styles/theme.css';
import './styles/global.css';

import { Home } from './pages/Home';
import { TaskContextProvider } from './contexts/TaskContext';

export function App() {
  return (
    <TaskContextProvider>
      <Home />
    </TaskContextProvider>
  );
}

// A ideia é deixar que cada função faça a sua parte, de modo que o setState seja chamado dentro dessas funções auxiliares.
