import React from 'react';
import styles from './SummaryCards.module.css';
import { FaTools, FaCheckCircle, FaClock, FaUsers, FaTasks, FaPercentage } from 'react-icons/fa';

const iconMap = {
  'Total de Serviços': <FaTasks />,
  'Em Andamento': <FaClock />,
  'Concluídos': <FaCheckCircle />,
  'Agendados': <FaTools />,
  'Trabalhadores Ativos': <FaUsers />,
  'Serviços Concluídos': <FaCheckCircle />,
  'Progresso da Obra': <FaPercentage />,
};

const SummaryCards = ({ cards }) => {
  return (
    <div className={styles.cardContainer}>
      {cards.map((card, index) => (
        <div className={styles.card} key={index}>
          <div className={styles.icon} style={{ color: card.color }}>
            {iconMap[card.label] || <FaTasks />}
          </div>
          <div className={styles.content}>
            <div className={styles.value} style={{ color: card.color }}>
              {card.value}
            </div>
            <div className={styles.label}>{card.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SummaryCards;
