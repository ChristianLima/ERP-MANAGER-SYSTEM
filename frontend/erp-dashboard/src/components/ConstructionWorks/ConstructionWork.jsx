import React from 'react';
import styles from './ConstructionWork.module.css';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const ConstructionWork = ({ constructionWorkData, barData }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Obras em Andamento</h2>

      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={barData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="meta" fill="#60a5fa" />
          <Bar dataKey="done" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ConstructionWork;
