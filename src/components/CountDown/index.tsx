import styles from './styles.module.css';
import { useTaskContext } from '../../contexts/TaskContext';

export function CountDown() {
  const { state } = useTaskContext();
  console.log(state);

  return (
    <div className={styles.container}>{state.formattedSecondsRemaining}</div>
  );
}
