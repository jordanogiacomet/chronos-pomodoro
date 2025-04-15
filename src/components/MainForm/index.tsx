import React, { useRef } from 'react';
import { DefaultInput } from '../DefaultInput';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';
import { TaskModel } from '../../models/TaskModel.ts';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext.ts';
import { getNextCycleType } from '../../utils/getNextCycleType.ts';
import { TaskActionTypes } from '../../contexts/TaskContext/taskActions.ts';
import { getNextCycle } from '../../utils/getNextCycle.ts';

export function MainForm() {
  const { state, dispatch } = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null); // Vamos contar quantas

  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!taskNameInput.current) return;

    const taskName = taskNameInput.current.value.trim();
    if (!taskName) {
      alert('Digite o nome da tarefa');
      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: state.config[nextCycleType],
      type: nextCycleType,
    };

    dispatch({ type: TaskActionTypes.START_TASK, payload: newTask });
  }

  function handleInterruptTask(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) {
    e.preventDefault();

    dispatch({
      type: TaskActionTypes.INTERRUPT_TASK,
    });

    // setState(prevState => {
    //   return {
    //     ...prevState,
    //     activeTask: null,
    //     secondsRemaining: 0,
    //     formattedSecondsRemaining: '00:00',
    //     tasks: prevState.tasks.map(task => {
    //       if (prevState.activeTask && prevState.activeTask.id === task.id) {
    //         return { ...task, interruptDate: Date.now() };
    //       }
    //       return task;
    //     }),
    //   };
    // });
  }

  return (
    <form onSubmit={handleCreateNewTask} className='form'>
      <div className='formRow'>
        <DefaultInput
          labelText='Task'
          id='meuInput'
          type='text'
          placeholder='Digite algo'
          ref={taskNameInput}
          disabled={!!state.activeTask}
        />
      </div>
      <div className='formRow'>
        <p>Próximo intervalo é de 25 min</p>
      </div>
      {state.currentCycle > 0 && (
        <div className='formRow'>
          <Cycles />
        </div>
      )}
      <div className='formRow'>
        {!state.activeTask && (
          <DefaultButton
            aria-label='Iniciar nova tarefa'
            title='Iniciar nova tarefa'
            type='submit'
            icon={<PlayCircleIcon />}
            key='Este é o botão de submit'
          />
        )}

        {!!state.activeTask && (
          <DefaultButton
            aria-label='Interromper tarefa atual'
            title='Interromper tarefa atual'
            type='button'
            color='red'
            icon={<StopCircleIcon />}
            onClick={handleInterruptTask}
            key='NÃO ENVIAR O FORM'
          />
        )}
      </div>
    </form>
  );
}
