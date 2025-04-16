import { TaskModel } from '../../models/TaskModel.ts';
import { TaskStateModel } from '../../models/TaskStateModel.ts';

export enum TaskActionTypes {
  START_TASK = 'START_TASK',
  INTERRUPT_TASK = 'INTERRUPT_TASK',
  RESET_STATE = 'RESET_STATE',
  COUNT_DOWN = 'COUNT_DOWN',
  COMPLETE_TASK = 'COMPLETE_TASK',
}

export type TaskActionWithPayload =
  | {
      type: TaskActionTypes.START_TASK;
      payload: TaskModel;
    }
  | {
      type: TaskActionTypes.COUNT_DOWN;
      payload: Pick<TaskStateModel, 'secondsRemaining'>;
    };

export type TaskActionWithoutPayload = {
  type:
    | TaskActionTypes.RESET_STATE
    | TaskActionTypes.INTERRUPT_TASK
    | TaskActionTypes.COMPLETE_TASK;
};

export type TaskActionModel = TaskActionWithPayload | TaskActionWithoutPayload;
