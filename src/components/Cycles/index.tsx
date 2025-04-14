import styles from './styles.module.css';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext.ts';
import { getNextCycle } from '../../utils/getNextCycle.ts';
import { getNextCycleType } from '../../utils/getNextCycleType.ts';

export function Cycles() {
  const { state } = useTaskContext();

  const cycleStep = Array.from({ length: state.currentCycle });
  const cycleDescriptionMap = {
    workTime: 'foco',
    shortBreakTime: 'pausa curta',
    longBreakTime: 'pausa longa',
  };

  console.log(cycleStep);

  return (
    <div className={styles.cycles}>
      <span>Ciclos: </span>

      <div className={styles.cyclesDots}>
        {cycleStep.map((_, index) => {
          const nextCycle = getNextCycle(index);
          const nextCycleType = getNextCycleType(nextCycle);
          return (
            <span
              key={nextCycle}
              className={`${styles.cycleDot} ${styles[nextCycleType]}`}
              aria-label={`Indicador de ciclo de ${cycleDescriptionMap[nextCycleType]}`}
              title={`Indicador de ciclo de ${cycleDescriptionMap[nextCycleType]}`}
            ></span>
          );
        })}
      </div>
    </div>
  );
}
