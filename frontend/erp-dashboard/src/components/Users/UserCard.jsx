import React from "react";
import styles from "./UserCard.module.css";

const UserCard = ({ user, onDetails }) => {
  return (
    <div className={styles.card}>
      <div className={styles.avatar}>
        <span className={styles.avatarIcon}>👤</span>
      </div>
      <div className={styles.info}>
        <h3 className={styles.name}>{user.name}</h3>
        <p className={styles.text}><strong>Matrícula:</strong> {user.registration}</p>
        <p className={styles.text}><strong>Função:</strong> {user.role}</p>
        <button className={styles.detailsBtn} onClick={() => onDetails(user)}>
          Mais detalhes
        </button>
      </div>
    </div>
  );
};

export default UserCard;
