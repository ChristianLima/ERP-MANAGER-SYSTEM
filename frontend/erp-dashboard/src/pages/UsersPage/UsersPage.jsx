import React, { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./UsersPage.module.css";

const mockUsers = Array.from({ length: 42 }, (_, i) => ({
  id: i + 1,
  name: `Usuário ${i + 1}`,
  registration: `MAT${1000 + i}`,
  role: i % 2 === 0 ? "Técnico" : "Administrador",
}));

const UsersPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 12;

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  const indexStart = (currentPage - 1) * usersPerPage;
  const currentUsers = mockUsers.slice(indexStart, indexStart + usersPerPage);
  const totalPages = Math.ceil(mockUsers.length / usersPerPage);

  return (
    <div className={styles.dashboardLayout}>
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <div className={styles.mainContent}>
        <Header />
        <div className={styles.contentWrapper}>
          <h2 className={styles.pageTitle}>Usuários</h2>
          <div className={styles.cardGrid}>
            {currentUsers.map((user) => (
                <div key={user.id} className={styles.card}>
                <div className={styles.avatar}>👤</div>
                <div className={styles.cardDetails}>
                    <h3>{user.name}</h3>
                    <p>Matrícula: {user.registration}</p>
                    <p>Função: {user.role}</p>
                </div>
                </div>
            ))}
          </div>
          <div className={styles.pagination}>
            <button onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                    disabled={currentPage === 1}>Anterior</button>
            <span>{currentPage} / {totalPages}</span>
            <button onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                    disabled={currentPage === totalPages}>Próxima</button>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default UsersPage;
