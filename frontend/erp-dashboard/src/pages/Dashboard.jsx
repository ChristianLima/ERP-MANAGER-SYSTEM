import React, { useState } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Header from '../components/Header/Header';
import Service from '../components/Services/Service';
import ConstructionWork from '../components/ConstructionWorks/ConstructionWork';
import ScheduledList from '../components/ScheduledList/ScheduledList';
import Footer from '../components/Footer/Footer';
import SummaryCards from '../components/SummaryCards/SummaryCards';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  const [selectedMonth, setSelectedMonth] = useState(new Date());
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const serviceData = {
    inProgress: 60,
    completed: 30,
    scheduled: 10,
    total: 100,
  };

  const constructionWorks = [
    {
      id: 'obra1',
      name: 'Obra 1',
      numberOfWorkers: 25,
      totalServices: 50,
      completedServices: 30,
      totalProgress: 70,
      workStage: 'Meio da obra',
    },
    {
      id: 'obra2',
      name: 'Obra 2',
      numberOfWorkers: 15,
      totalServices: 40,
      completedServices: 20,
      totalProgress: 50,
      workStage: 'Início da obra',
    },
  ];

  const barDataByObra = {
    obra1: [
      { name: 'Jan', meta: 50, done: 30 },
      { name: 'Feb', meta: 50, done: 40 },
      { name: 'Mar', meta: 50, done: 45 },
      { name: 'Apr', meta: 50, done: 50 },
      { name: 'May', meta: 50, done: 50 },
      { name: 'Jun', meta: 50, done: 40 },
    ],
    obra2: [
      { name: 'Jan', meta: 40, done: 20 },
      { name: 'Feb', meta: 45, done: 25 },
      { name: 'Mar', meta: 50, done: 35 },
      { name: 'Apr', meta: 50, done: 45 },
      { name: 'May', meta: 50, done: 48 },
      { name: 'Jun', meta: 45, done: 40 },
    ],
  };

  const [selectedConstructionId, setSelectedConstructionId] = useState('obra1');

  const selectedConstruction = constructionWorks.find(
    (obra) => obra.id === selectedConstructionId
  );

  // Pega o barData correto conforme a obra selecionada
  const barData = barDataByObra[selectedConstructionId];

  const serviceCards = [
    {
      label: 'Total de Serviços',
      value: serviceData.total,
      color: '#1e3a8a',
    },
    {
      label: 'Em Andamento',
      value: serviceData.inProgress,
      color: '#2563eb',
    },
    {
      label: 'Concluídos',
      value: serviceData.completed,
      color: '#10b981',
    },
    {
      label: 'Agendados',
      value: serviceData.scheduled,
      color: '#f59e0b',
    },
  ];

  const constructionCards = [
    {
      label: 'Progresso da Obra',
      value: `${selectedConstruction.totalProgress}%`,
      color: '#7c3aed',
    },
    {
      label: 'Serviços Concluídos',
      value: selectedConstruction.completedServices,
      color: '#16a34a',
    },
    {
      label: 'Trabalhadores Ativos',
      value: selectedConstruction.numberOfWorkers,
      color: '#0284c7',
    },
  ];

  return (
    <div className={styles.dashboardLayout}>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className={styles.mainContent}>
        <Header />

        <div className={styles.contentWrapper}>
          <div className={styles.leftSection}>
            <SummaryCards cards={serviceCards} />

            <Service
              serviceData={serviceData}
              selectedMonth={selectedMonth}
              handleMonthChange={setSelectedMonth}
            />

            {/* ÚNICO seletor de obra */}
            <div className={styles.selectWrapper}>
              <label htmlFor="obraSelect">Selecionar Obra:</label>
              <select
                id="obraSelect"
                value={selectedConstructionId}
                onChange={(e) => setSelectedConstructionId(e.target.value)}
                className={styles.select}
              >
                {constructionWorks.map((obra) => (
                  <option key={obra.id} value={obra.id}>
                    {obra.name}
                  </option>
                ))}
              </select>
            </div>

            <SummaryCards cards={constructionCards} />

            <ConstructionWork
              constructionWorkData={selectedConstruction}
              barData={barData}
            />
          </div>

          <div className={styles.rightSection}>
            <ScheduledList
              tasks={[
                { id: 1, name: 'Inspeção elétrica - Obra A', status: 'Agendado' },
                { id: 2, name: 'Limpeza do terreno - Obra B', status: 'Em andamento' },
                { id: 3, name: 'Revisão hidráulica - Obra C', status: 'Concluído' },
              ]}
              onEdit={(task) => alert(`Editar: ${task.name}`)}
            />
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
