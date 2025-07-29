import React from 'react';
import styles from './ScheduledList.module.css';

const ScheduledList = ({ tasks, onEdit }) => {
  return (
    <div className={styles.listContainer}>
      <h3>Serviços Agendados para Hoje</h3>
      <ul className={styles.list}>
        {tasks.map((task) => (
          <li key={task.id} className={styles.taskItem}>
            <div>
              <strong>{task.name}</strong>
              <span className={styles.status}>{task.status}</span>
            </div>
            <button onClick={() => onEdit(task)}>Modificar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScheduledList;
