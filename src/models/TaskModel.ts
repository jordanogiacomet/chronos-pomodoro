import { TaskStateModel } from './TaskStateModel.ts';

export type TaskModel = {
  id: string;
  name: string;
  duration: number;
  startDate: number;
  completeDate: number | null; // Quando o temporizador chega ao final setamos o number. Se pessoa parar o temporizador, setamos como NULL;
  interruptDate: number | null; // Quando a pessoa interromper eu preencho isso. Se não, é NULL;
  type: keyof TaskStateModel['config'];
};
