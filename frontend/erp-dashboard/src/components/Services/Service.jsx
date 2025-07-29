import React from 'react';
import styles from './Service.module.css';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const COLORS = ['#2563eb', '#10b981', '#f59e0b'];

const Service = ({
  serviceData = { inProgress: 0, completed: 0, scheduled: 0 },
  selectedMonth = new Date(),
  handleMonthChange = () => {},
}) => {
  const data = [
    { name: 'Em Andamento', value: serviceData?.inProgress || 0 },
    { name: 'Concluído', value: serviceData?.completed || 0 },
    { name: 'Agendado', value: serviceData?.scheduled || 0 },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Serviços Solicitados</h2>
        <input
          type="month"
          value={selectedMonth.toISOString().slice(0, 7)}
          onChange={(e) => handleMonthChange(new Date(e.target.value))}
          className={styles.input}
        />
      </div>

      <div className={styles.chartContainer}>
        <PieChart width={200} height={200}>
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={40}
            outerRadius={60}
            fill="#8884d8"
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>
    </div>
  );
};

export default Service;
