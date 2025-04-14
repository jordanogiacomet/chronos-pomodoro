import { TaskStateModel } from '../../models/TaskStateModel.ts';
import React, { createContext } from 'react';
import { initialTaskState } from './initialTaskState.ts';

type TaskContextProps = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

const initialContextValue = {
  state: initialTaskState,
  setState: () => {},
};

export const TaskContext = createContext<TaskContextProps>(initialContextValue);
