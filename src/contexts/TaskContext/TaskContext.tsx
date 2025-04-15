import { TaskStateModel } from '../../models/TaskStateModel.ts';
import React, { createContext } from 'react';
import { initialTaskState } from './initialTaskState.ts';
import { TaskActionModel } from './taskActions.ts';

type TaskContextProps = {
  state: TaskStateModel;
  dispatch: React.Dispatch<TaskActionModel>;
};

const initialContextValue = {
  state: initialTaskState,
  dispatch: () => {},
};

export const TaskContext = createContext<TaskContextProps>(initialContextValue);
