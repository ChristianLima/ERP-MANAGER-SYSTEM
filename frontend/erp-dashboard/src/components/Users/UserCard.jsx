import React from 'react';
import styles from './UserCard.module.css';
import { FaUserCircle } from 'react-icons/fa';

const UserCard = ({ user }) => {
  return (
    <div className={styles.card}>
      <FaUserCircle className={styles.avatar} />
      <div className={styles.details}>
        <h3>{user.name}</h3>
        <p><strong>Matrícula:</strong> {user.registration}</p>
        <p><strong>Função:</strong> {user.role}</p>
      </div>
    </div>
  );
};

export default UserCard;
