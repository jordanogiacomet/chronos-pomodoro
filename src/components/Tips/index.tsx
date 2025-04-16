import { Fragment } from 'react';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext.ts';
import { TaskModel } from '../../models/TaskModel.ts';

type TipsProps = {
  nextCycleType: TaskModel['type'];
};

export function Tips({ nextCycleType }: TipsProps) {
  const { state } = useTaskContext();

  const tipsForWhenActiveTask = {
    workTime: (
      <span>
        Foque por <b>{state.config.workTime}min</b>
      </span>
    ),
    shortBreakTime: (
      <span>
        Descanse por <b>{state.config.shortBreakTime}min</b>
      </span>
    ),
    longBreakTime: (
      <span>
        <b>Descanso longo</b>
      </span>
    ),
  };

  const tipsForNoActiveTask = {
    workTime: (
      <span>
        Próximo ciclo é de <b>{state.config.workTime}min</b>
      </span>
    ),
    shortBreakTime: (
      <span>
        Próximo ciclo é de <b>{state.config.shortBreakTime}min</b>
      </span>
    ),
    longBreakTime: (
      <span>
        Próximo ciclo é de <b>descanso longo</b>
      </span>
    ),
  };

  return (
    <Fragment>
      {!!state.activeTask && tipsForWhenActiveTask[state.activeTask.type]}
      {!state.activeTask && tipsForNoActiveTask[nextCycleType]}
    </Fragment>
  );
}
