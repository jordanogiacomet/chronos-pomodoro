import { TaskModel } from './TaskModel.ts';

// Estado -> Componente -> Filhos; Teoricamente o estado nessa primeira implementação será via props; Por enquanto o nosso estado ficará em ‘App’, que conseguimos manter no mesmo nível de pages;

export type TaskStateModel = {
  tasks: TaskModel[]; // Esse array conta com o histórico de tarefas; Histórico, mas no formulário em si, eu também preciso ter conhecimento desse array; MainForm;
  secondsRemaining: number; // Meu contador, que será feito os cálculos em si; // Contador; Histórico; Botão -> Para saber se ele estará ativo ou não, se eu paro a task ou início uma nova;
  formattedSecondsRemaining: string; // Número do contador formatado para 00:00; // Título; Contador;
  activeTask: TaskModel | null; // Uma task pode estar ativa sendo do tipo TaskModel, se nenhuma task está ativa, logo esse valor é null; // Contador; Histórico; MainForm; Button;
  currentCycle: number; // Vai de 1 a 8, e representa visualmente os ciclos, me indicando se eu estou em descanso ou trabalho;
  config: {
    // Representa as configurações que podem ocorrer na página de configurações. Mudando tempo dos elementos; Só para iniciar uma task eu já preciso dessas configurações;
    workTime: number; // Main Form;
    shortBreakTime: number; // Main Form;
    longBreakTime: number; // Main Form;
  };
};

// O que percebemos é que precisamos colocar esse estado em algum lugar que eu consiga passar ele para todos os componentes que eu quiser;
